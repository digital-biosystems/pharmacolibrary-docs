<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;}]"></div>

# inotuzumab ozogamicin

- **generic name:** inotuzumab ozogamicin
- **ATC codes:** `L01FB01`
- **DrugBank:** [DB05889](https://go.drugbank.com/drugs/DB05889) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Inotuzumab ozogamicin is an antibody-drug conjugate used to treat a form of acute lymphoblastic leukemia/lymphoma. It is authorised in the European Union and carries a boxed warning, so its use is closely monitored.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3799041](https://www.wikidata.org/wiki/Q3799041) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:48 | 6:03 | 0/0/2 | 1/0/0 | 0/0/0 | 75,905/37,263 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.2622)</sub><br><sub>route_to: `human_review`</sub> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) | — | 2-compartment (no model) | 4 | Garrett M et al., Population pharmacokinetics of inotuzum…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-018-9614-9](https://doi.org/10.1007/s10928-018-9614-9) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Wu_2024_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference.md) | — | 2-compartment (no model) | 4 | Wu JH et al., Population Pharmacokinetics of Inotuzum…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01386-z](https://doi.org/10.1007/s40262-024-01386-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Betts_2016_tumor_growth_and_inhibition](drugs/drug_inotuzumab_ozogamicin/pd_Betts_2016_tumor_growth_and_inhibition.md) | tumor growth and inhibition ← inotuzumab ozogamicin · disease-progression model | — | Betts AM et al., Preclinical to Clinical Translation of…, The AAPS journal (2016) | [10.1208/s12248-016-9929-7](https://doi.org/10.1208/s12248-016-9929-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=inotuzumab_ozogamicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CD22 (antibody), CD22 (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Betts_2016.pdf` | Betts AM et al., Preclinical to Clinical Translation of…, The AAPS journal (2016) | popPK | 9 | [10.1208/s12248-016-9929-7](https://doi.org/10.1208/s12248-016-9929-7) | [27198897](https://pubmed.ncbi.nlm.nih.gov/27198897) | The study models inotuzumab ozogamicin disposition, but no numeric PK parameter values are shown in the provided evidence. |
| `Luu_2016.pdf` | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | popPK | 9 | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) | [27491482](https://pubmed.ncbi.nlm.nih.gov/27491482) | A two-compartment InO PK model is reported, but no numeric disposition parameter values are provided. |

<sub>queue written 2026-10-07T12:43:25.562463+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Betts_2016 | relevant | 9 | 0 | The study models inotuzumab ozogamicin disposition, but no numeric PK parameter values are shown in the provided evidence. |
| popPK | Hedrich_2018 | irrelevant | 1 | 0 | This is a review and provides no quantitative inotuzumab ozogamicin disposition parameters. |
| popPK | Hibma_2019 | irrelevant | 2 | 0 | The study models QTc versus inotuzumab ozogamicin concentration but reports no quantitative disposition parameters. |
| popPK | Kantarjian_2018 | irrelevant | 0 | 0 | This human patient-reported outcomes study reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Luu_2016 | relevant | 9 | 1 | A two-compartment InO PK model is reported, but no numeric disposition parameter values are provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:44 UTC</sub>
