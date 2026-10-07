<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefodizime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefodizime_SchferKorting1986_reference&quot;,&quot;label&quot;:&quot;Sch\u00e4fer-Korting_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefodizime/Cefodizime_SchferKorting1986_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefodizime

- **generic name:** cefodizime
- **ATC codes:** `J01DD09`
- **DrugBank:** [DB13470](https://go.drugbank.com/drugs/DB13470) · **PubChem:** not captured
- **molar mass:** 584.669 g/mol (C20H20N6O7S4) — DrugBank
- **groups:** investigational

## About

Cefodizime is a third-generation cephalosporin antibiotic used against bacterial infections. It is classed as investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057292](https://www.wikidata.org/wiki/Q5057292) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefodizime | parent | 584.669 | C20H20N6O7S4 | DrugBank | — | Boccazzi_1990, Dagrosa_1987, Schäfer-Korting_1986, el_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:15 | 3:25 | 1/2/2 | 0/0/0 | 0/0/0 | 48,569/36,795 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Schäfer-Korting_1986_reference](drugs/drug_cefodizime/Cefodizime_SchferKorting1986_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Schäfer-Korting M et al., Cefodizime penetration into skin suctio…, European journal of clinica… (1986) | [10.1007/BF00541531](https://doi.org/10.1007/BF00541531) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Dagrosa_1987_reference](drugs/drug_cefodizime/Cefodizime_Dagrosa1987_reference.md) | — | 1-compartment (no model) | 5 | Dagrosa EE et al., Dose linearity and other pharmacokineti…, Clinical therapeutics (1987) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [el_1992_reference](drugs/drug_cefodizime/Cefodizime_el1992_reference.md) | — | 1-compartment (no model) | 3 | el Touny M et al., Pharmacokinetics of cefodizime in patie…, Chemotherapy (1992) | [10.1159/000239001](https://doi.org/10.1159/000239001) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Boccazzi_1990_reference](drugs/drug_cefodizime/Cefodizime_Boccazzi1990_reference.md) | — | 1-compartment (no model) | 2 | Boccazzi A et al., The pharmacokinetics of cefodizime in c…, The Journal of antimicrobia… (1990) | [10.1093/jac/26.suppl_c.83](https://doi.org/10.1093/jac/26.suppl_c.83) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Conte_1994_reference](drugs/drug_cefodizime/Cefodizime_Conte1994_reference.md) | — | 1-compartment (no model) | 0 | Conte JE, Pharmacokinetics of cefodizime in volun…, Journal of clinical pharmac… (1994) | [10.1002/j.1552-4604.1994.tb01982.x](https://doi.org/10.1002/j.1552-4604.1994.tb01982.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arai_1989.pdf` | Arai S et al., Pharmacokinetic study of cefodizime in…, Arzneimittel-Forschung (1989) | popPK | 10 | not captured | [2818675](https://pubmed.ncbi.nlm.nih.gov/2818675) | The paper describes a PK study of cefodizime in mice with specific parameters (KE, V2, T1/2, AUC) mentioned qualitatively in the abstract, but no numeric values are present in the provided evidence. |
| `Boccazzi_1990.pdf` | Boccazzi A et al., The pharmacokinetics of cefodizime in c…, The Journal of antimicrobia… (1990) | popPK | 10 | [10.1093/jac/26.suppl_c.83](https://doi.org/10.1093/jac/26.suppl_c.83) | [2074256](https://pubmed.ncbi.nlm.nih.gov/2074256) | The study provides quantitative pharmacokinetic parameters (Vd, T1/2, AUC) for cefodizime in children, although clearance (CL) and intercompartmental clearance (Q) are not explicitly listed as numeric values. |
| `Conte_1994.pdf` | Conte JE, Pharmacokinetics of cefodizime in volun…, Journal of clinical pharmac… (1994) | popPK | 10 | [10.1002/j.1552-4604.1994.tb01982.x](https://doi.org/10.1002/j.1552-4604.1994.tb01982.x) | [7876397](https://pubmed.ncbi.nlm.nih.gov/7876397) | The paper reports quantitative pharmacokinetic parameters (clearance and half-life) for cefodizime in human subjects, with specific numeric values provided in the abstract. |
| `Dagrosa_1987.pdf` | Dagrosa EE et al., Dose linearity and other pharmacokineti…, Clinical therapeutics (1987) | popPK | 10 | not captured | [3450392](https://pubmed.ncbi.nlm.nih.gov/3450392) | The abstract provides key quantitative parameters (Vss ~40 L, t1/2 2.5 h, AUC linearity) but does not explicitly list numeric values for clearance (CL) or specific compartmental clearances (Q). |
| `Müller_1997.pdf` | Müller M et al., Relationship between serum and free int…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1002/j.1552-4604.1997.tb04294.x](https://doi.org/10.1002/j.1552-4604.1997.tb04294.x) | [9506005](https://pubmed.ncbi.nlm.nih.gov/9506005) | The study is a pharmacokinetic investigation of cefodizime in humans that explicitly mentions fitting data to a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text, likely residing in tables or figures not included. |
| `Schäfer-Korting_1986.pdf` | Schäfer-Korting M et al., Cefodizime penetration into skin suctio…, European journal of clinica… (1986) | popPK | 10 | [10.1007/BF00541531](https://doi.org/10.1007/BF00541531) | [3732363](https://pubmed.ncbi.nlm.nih.gov/3732363) | The paper provides a compartmental model and explicit numeric values for volume of distribution, clearance, and half-life for cefodizime in humans. |
| `el_1991.pdf` | el Guinaidy MA et al., Pharmacokinetics of cefodizime in norma…, Chemotherapy (1991) | popPK | 10 | [10.1159/000238837](https://doi.org/10.1159/000238837) | [2032473](https://pubmed.ncbi.nlm.nih.gov/2032473) | The abstract explicitly reports quantitative pharmacokinetic parameters including half-life and total systemic clearance for cefodizime in humans. |
| `el_1992.pdf` | el Touny M et al., Pharmacokinetics of cefodizime in patie…, Chemotherapy (1992) | popPK | 10 | [10.1159/000239001](https://doi.org/10.1159/000239001) | [1473357](https://pubmed.ncbi.nlm.nih.gov/1473357) | The abstract provides explicit quantitative pharmacokinetic parameters for cefodizime, including half-life, volume of distribution, and AUC values for both healthy volunteers and patients with liver cirrhosis. |
| `Blandino_2000.pdf` | Blandino G et al., Comparative activity of cefodizime and…, Journal of chemotherapy (Fl… (2000) | pd | 5 | [10.1179/joc.2000.12.6.503](https://doi.org/10.1179/joc.2000.12.6.503) | [11154034](https://www.ncbi.nlm.nih.gov/pubmed/11154034) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-07T11:12:02.313044+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arai_1989 | relevant | 10 | 0 | The paper describes a PK study of cefodizime in mice with specific parameters (KE, V2, T1/2, AUC) mentioned qualitatively in the abstract, but no numeric values are present in the provided evidence. |
| popPK | Blandino_2000 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic simulation using assumed concentration-time profiles, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Müller_1997 | relevant | 10 | 2 | The study is a pharmacokinetic investigation of cefodizime in humans that explicitly mentions fitting data to a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text, likely residing in tables or figures not included. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:14 UTC</sub>
