<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cobimetinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_h_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_h_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_h_h.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_pk_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_pk_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cobimetinib_Duong2026_model_pkpd_h&quot;,&quot;label&quot;:&quot;Duong_2026_model_pkpd_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pkpd_h.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cobimetinib

- **generic name:** cobimetinib
- **ATC codes:** `L01EE02`, `L01XE38`
- **DrugBank:** [DB05239](https://go.drugbank.com/drugs/DB05239) · **PubChem:** [CID 16222096](https://pubchem.ncbi.nlm.nih.gov/compound/16222096)
- **molar mass:** 531.318 g/mol (C21H21F3IN3O2) — DrugBank
- **groups:** approved, investigational

## About

Cobimetinib is a MEK inhibitor anticancer drug used to treat melanoma, including metastatic melanoma. It is authorised in the European Union for melanoma and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708292](https://www.wikidata.org/wiki/Q15708292) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cobimetinib | parent | 531.318 | C21H21F3IN3O2 | DrugBank | [16222096](https://pubchem.ncbi.nlm.nih.gov/compound/16222096) | Duong_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:58 | 3:53 | 3/1/0 | 1/0/0 | 0/0/0 | 75,653/23,532 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Duong_2026_model_h_h](drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_h_h.md) | ▶ model + simulator | 1-compartment, oral | 3 | Duong NH et al., Cellular Heterogeneity in Drug Uptake A…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Duong_2026_model_pk_h](drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pk_h.md) | ▶ model + simulator | 1-compartment, oral | 3 | Duong NH et al., Cellular Heterogeneity in Drug Uptake A…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Duong_2026_model_pkpd_h](drugs/drug_cobimetinib/Cobimetinib_Duong2026_model_pkpd_h.md) | ▶ model + simulator | 1-compartment, oral | 3 | Duong NH et al., Cellular Heterogeneity in Drug Uptake A…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Han_2015_reference](drugs/drug_cobimetinib/Cobimetinib_Han2015_reference.md) | — | 1-compartment (no model) | 0 | Han K et al., Population pharmacokinetics and dosing…, Cancer chemotherapy and pha… (2015) | [10.1007/s00280-015-2862-0](https://doi.org/10.1007/s00280-015-2862-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Duong_2026_resp](drugs/drug_cobimetinib/pd_Duong_2026_resp.md) | instantaneous death rate ← cobimetinib · direct sigmoid Emax (Hill) effect | — | Duong NH et al., Cellular Heterogeneity in Drug Uptake A…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70282](https://doi.org/10.1002/psp4.70282) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cobimetinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` weak inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` weak inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` weak inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` weak inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` weak inhibitor | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` unknown, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` unknown, `SLCO1B1` weak inhibitor, `SLCO1B3` inhibitor, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` unknown, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MAP2K1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Han_2015.pdf` | Han K et al., Population pharmacokinetics and dosing…, Cancer chemotherapy and pha… (2015) | popPK | 10 | [10.1007/s00280-015-2862-0](https://doi.org/10.1007/s00280-015-2862-0) | [26365290](https://pubmed.ncbi.nlm.nih.gov/26365290) | The human population-PK model reports numeric cobimetinib clearance, volume, and half-life estimates in the provided evidence. |

<sub>queue written 2026-10-06T22:54:28.923450+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2019 | irrelevant | 1 | 0 | This is a review and provides no cobimetinib disposition parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:54 UTC</sub>
