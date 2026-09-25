<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cytarabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cytarabine_Crook2013_healthy_dogs&quot;,&quot;label&quot;:&quot;Crook_2013_healthy dogs&quot;,&quot;href&quot;:&quot;drugs/drug_cytarabine/Cytarabine_Crook2013_healthy_dogs.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# cytarabine

- **generic name:** cytarabine
- **ATC codes:** `L01BC01`, `L01XY01`
- **DrugBank:** [DB00987](https://go.drugbank.com/drugs/DB00987)
- **groups:** approved, investigational

## About

**Description.** A pyrimidine nucleoside analog that is used mainly in the treatment of leukemia, especially acute non-lymphoblastic leukemia. Cytarabine is an antimetabolite antineoplastic agent that inhibits the synthesis of DNA. Its actions are specific for the S phase of the cell cycle. It also has antiviral and immunosuppressant properties. (From Martindale, The Extra Pharmacopoeia, 30th ed, p472)

**Indication.** For the treatment of acute non-lymphocytic leukemia, acute lymphocytic leukemia and blast phase of chronic myelocytic leukemia.

Cytarabine is indicated in combination with [daunorubicin] for the treatment of newly-diagnosed therapy-related acute myeloid leukemia (t-AML) or AML with myelodysplasia-related changes (AML-MRC) in adults and pediatric patients 1 year and older.[L32843]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:38 | 1:01 | 0/0/0 | 0/0/0 | 0/0/0 | 26,820/1,668 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Crook_2013_healthy dogs](drugs/drug_cytarabine/Cytarabine_Crook2013_healthy_dogs.md) | Crook KI et al., The pharmacokinetics of cytarabine in d…, Journal of veterinary pharm… (2013) | [10.1111/jvp.12008](https://doi.org/10.1111/jvp.12008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cytarabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate | DrugBank actor |
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>“…e is metabolism to the inactive compound ara-U, followed by urinary excretion of ara-U.…”</sub> | prose |

<sub>Actors without a tissue in the table: ABCC10 (substrate), CDA (substrate), DCK (substrate), DCTD (substrate), DNA (cross-linking/alkylation), NT5E (substrate), POLB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 53 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crook_2013.pdf` | Crook KI et al., The pharmacokinetics of cytarabine in d…, Journal of veterinary pharm… (2013) | popPK | 10 | [10.1111/jvp.12008](https://doi.org/10.1111/jvp.12008) | [22943060](https://pubmed.ncbi.nlm.nih.gov/22943060) | The study reports quantitative pharmacokinetic parameters (half-life, Cmax, volume of distribution) for cytarabine in dogs, with all numeric values explicitly present in the text. |
| `Krogh-Madsen_2012.pdf` | Krogh-Madsen M et al., Population pharmacokinetics of cytarabi…, Cancer chemotherapy and pha… (2012) | popPK | 10 | [10.1007/s00280-011-1800-z](https://doi.org/10.1007/s00280-011-1800-z) | [22212298](https://pubmed.ncbi.nlm.nih.gov/22212298) | The paper is a population PK study for cytarabine, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which only contains qualitative descriptions and relative changes. |
| `Nikanjam_2018.pdf` | Nikanjam M et al., Persistent cytarabine and daunorubicin…, Cancer chemotherapy and pha… (2018) | popPK | 10 | [10.1007/s00280-017-3484-5](https://doi.org/10.1007/s00280-017-3484-5) | [29167924](https://pubmed.ncbi.nlm.nih.gov/29167924) | The paper describes a population PK model for cytarabine (in CPX-351) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Wang_2019.pdf` | Wang Q et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2019) | popPK | 8 | [10.1002/jcph.1366](https://doi.org/10.1002/jcph.1366) | [30566230](https://pubmed.ncbi.nlm.nih.gov/30566230) | The paper describes a population PK model for cytarabine (as part of CPX-351) but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-15T06:38:19.241652+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Auger-Quittet_2014 | irrelevant | 0 | 0 | The paper is a clinical meta-analysis of treatment outcomes (survival, response rates) and does not report any pharmacokinetic parameters for cytarabine. |
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with cytarabine serving only as a co-administered comparator agent. |
| PD | Badawi_2024 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and exposure-response relationships of venetoclax, not cytarabine. |
| popPK | Dahi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melphalan, with cytarabine only mentioned as part of the BEAM regimen name without any reported PK parameters. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorafenib, with cytarabine serving only as a co-administered drug in the treatment regimen. |
| popPK | Jost_2020 | relevant | 8 | 2 | The paper develops a population PK/PD model for cytarabine (Ara-C) in AML patients, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text and are referenced as being in Table S1 in the supplementary material. |
| popPK | Krogh-Madsen_2012 | relevant | 10 | 2 | The paper is a population PK study for cytarabine, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, which only contains qualitative descriptions and relative changes. |
| popPK | Nikanjam_2018 | relevant | 10 | 0 | The paper describes a population PK model for cytarabine (in CPX-351) but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Wang_2019 | relevant | 8 | 0 | The paper describes a population PK model for cytarabine (as part of CPX-351) but the specific numeric parameter values are not present in the provided evidence. |
| PD | Wang_2019 | not_relevant | 3 | 1 | The paper reports qualitative exposure-response trends using quartiles (higher exposure associated with better efficacy/lower mortality) but does not provide a formal PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 06:38 UTC</sub>
