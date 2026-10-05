<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;buformin&quot;}]"></div>

# buformin

- **generic name:** buformin
- **ATC codes:** `A10BA03`
- **DrugBank:** [DB04830](https://go.drugbank.com/drugs/DB04830) · **PubChem:** [CID 2468](https://pubchem.ncbi.nlm.nih.gov/compound/2468)
- **molar mass:** 157.2168 g/mol (C6H15N5) — DrugBank
- **groups:** approved, withdrawn

## About

Buformin is a biguanide anti-diabetic medication used to lower blood glucose in diabetes. It has been withdrawn from the market, reportedly because of safety concerns including lactic acidosis risk.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q715104](https://www.wikidata.org/wiki/Q715104) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:22 | 0:36 | 0/0/0 | 0/1/0 | 0/0/0 | 18,785/812 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2003_lactate](drugs/drug_buformin/pd_Wang_2003_lactate.md) | blood lactate concentration ← buformin · direct Emax (saturable) effect | — | Wang DS et al., Involvement of organic cation transport…, Molecular pharmacology (2003) | [10.1124/mol.63.4.844](https://doi.org/10.1124/mol.63.4.844) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=buformin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLC22A1` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-04T22:22:15.784251+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on osteosarcoma cell lines and does not report any pharmacokinetic parameters for buformin. |
| popPK | Jeong_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, not buformin. |
| PD | Jeong_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) and allometric scaling of metformin across nine species, with no analysis of pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Kilgore_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-proliferative effects in cancer cells and does not report pharmacokinetic parameters. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper describes a buformin-mimicking polymer for gene delivery and does not report any pharmacokinetic parameters for buformin. |
| PD | Lu_2020 | not_relevant | 3 | 2 | The paper reports a qualitative comparison of IC50 values for a polymer conjugate (CBA-Bu) versus a control, but does not provide a formal exposure-response model, numeric PD parameters for buformin itself, or a derivable concentration-effect curve. |
| popPK | Mori_1997 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of buformin on alanine metabolism in isolated hepatocytes, not its pharmacokinetic disposition parameters. |
| PD | Mori_1997 | not_relevant | 2 | 1 | The paper reports a qualitative inhibitory effect of a single concentration (0.1 mM) of buformin on lipid synthesis in isolated hepatocytes, but does not provide a dose-response curve or numeric PD parameters (e.g., IC50, Emax). |
| popPK | Sam_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not buformin. |
| PD | Sam_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of metformin and the effect of SLC22A1 polymorphisms on PK and clinical outcomes (weight, HbA1c), but it does not report a pharmacodynamic model or numeric exposure-response parameters (e.g., Emax, EC50) for buformin or metformin. |
| popPK | Scheen_1995 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for buformin. |
| PD | Scheen_1995 | not_relevant | 0 | 0 | The text is a general review of drug interactions in diabetes and mentions buformin only as a withdrawn biguanide, providing no pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of nateglinide metabolism) and does not report pharmacogenomic effects (gene variants) on buformin's PK or PD parameters. |
| popPK | Tikholov_1980 | irrelevant | 0 | 0 | The paper is a clinical review of metformin treatment that mentions buformin only as a comparator regarding adverse effects, without reporting any quantitative pharmacokinetic parameters. |
| PD | Tikholov_1980 | not_relevant | 1 | 0 | The text is a qualitative review of biquanides (metformin, buformin, tenformin) and clinical outcomes, containing no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study focuses on the mechanism of lactic acidosis and transporter involvement, reporting EC50 values and lactate concentrations rather than pharmacokinetic disposition parameters (CL, V, ka) for buformin. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper describes an immunochromatographic sensor for therapeutic drug monitoring and does not report any pharmacokinetic parameters for buformin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes an immunochromatographic sensor for drug monitoring and reports analytical IC50 values for antibody binding, not pharmacodynamic exposure-response or dose-response relationships for the drug's biological effect. |
| popPK | Yasuda_2002 | irrelevant | 0 | 0 | The study focuses on the mechanism of GLP-1 secretion enhancement by biguanides and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for buformin. |
| popPK | Zimmerman_1983 | irrelevant | 2 | 0 | The paper is a methodological study on fitting algorithms using buformin as a test case, and no specific numeric PK parameter values are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
