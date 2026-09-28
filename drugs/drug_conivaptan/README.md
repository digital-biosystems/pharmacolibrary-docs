<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;conivaptan&quot;}]"></div>

# conivaptan

- **generic name:** conivaptan
- **ATC codes:** `C03XA02`
- **DrugBank:** [DB00872](https://go.drugbank.com/drugs/DB00872) · **PubChem:** [CID 151171](https://pubchem.ncbi.nlm.nih.gov/compound/151171)
- **molar mass:** 498.5744 g/mol (C32H26N4O2) — DrugBank
- **groups:** approved

## About

**Description.** Conivaptan is a non-peptide inhibitor of antidiuretic hormone (vasopressin). It was approved in 2004 for hyponatremia (low blood sodium levels) caused by syndrome of inappropriate antidiuretic hormone (SIADH). Conivaptan inhibits both isotypes of the vasopressin receptor (V1a and V2).

**Indication.** For the treatment of euvolemic or hypervolemic hyponatremia (e.g. the syndrome of inappropriate secretion of antidiuretic hormone, or in the setting of hypothyroidism, adrenal insufficiency, pulmonary disorders, etc.) in hospitalized patients.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 11:31 | 23:21 | 0/0/0 | 0/0/0 | 0/0/0 | 40,462/1,889 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=conivaptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AVPR1A (target), AVPR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mao_2009.pdf` | Mao ZL et al., Pharmacokinetics of conivaptan hydrochl…, Clinical therapeutics (2009) | popPK | 10 | [10.1016/j.clinthera.2009.07.011](https://doi.org/10.1016/j.clinthera.2009.07.011) | [19695403](https://pubmed.ncbi.nlm.nih.gov/19695403) | The study reports quantitative PK parameters (clearance, half-life, AUC) for conivaptan in the text, though volume of distribution is not explicitly provided. |
| `Marbury_2017.pdf` | Marbury T et al., Pharmacokinetics of conivaptan use in p…, Drug design, development an… (2017) | popPK | 9 | [10.2147/DDDT.S125459](https://doi.org/10.2147/DDDT.S125459) | [28243060](https://pubmed.ncbi.nlm.nih.gov/28243060) | The study reports quantitative PK parameters (half-life, relative clearance changes) for conivaptan in humans, but specific absolute values for clearance and volume are not explicitly listed in the provided text. |
| `Roy_2013.pdf` | Roy MJ et al., Pharmacokinetics of intravenous conivap…, Clinical pharmacokinetics (2013) | popPK | 8 | [10.1007/s40262-013-0047-8](https://doi.org/10.1007/s40262-013-0047-8) | [23456393](https://pubmed.ncbi.nlm.nih.gov/23456393) | The study reports PK parameters for conivaptan, but the evidence only provides relative percentage changes (e.g., 73% higher C48) rather than absolute numeric values for clearance, volume, or half-life. |
| `Yang_2020.pdf` | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | pd | 4 | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) | [32563698](https://www.ncbi.nlm.nih.gov/pubmed/32563698) | metadata signals extractable PD data (EC50) |
| `Lica-Miler_2026.pdf` | Lica-Miler M et al., Vaptans: A Narrative Review of Pharmaco…, Cells (2026) | pgx | 8 | [10.3390/cells15151388](https://doi.org/10.3390/cells15151388) | [42587799](https://www.ncbi.nlm.nih.gov/pubmed/42587799) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Ali_2007.pdf` | Ali F et al., Conivaptan: a dual vasopressin receptor…, Cardiovascular drug reviews (2007) | pgx | 7 | [10.1111/j.1527-3466.2007.00019.x](https://doi.org/10.1111/j.1527-3466.2007.00019.x) | [17919259](https://www.ncbi.nlm.nih.gov/pubmed/17919259) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-28T11:30:50.120825+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alhussieni_2026 | irrelevant | 0 | 0 | The paper is an in silico/in vitro study on RIOK3 inhibitors where conivaptan is only a repurposed candidate, and no quantitative PK parameters for conivaptan are reported. |
| popPK | Ali_2007 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| PGx | Ali_2007 | not_relevant | 0 | 0 | The paper is a general review of conivaptan's mechanism and clinical profile, not a pharmacogenomic study reporting genotype-specific PK/PD changes. |
| popPK | Alrabiah_2018 | irrelevant | 2 | 3 | The study is an in-vitro metabolic stability assay using rat liver microsomes, not a pharmacokinetic study reporting in-vivo disposition parameters (CL, V, Q, ka) or a population-PK model for conivaptan. |
| popPK | Ben_2025 | irrelevant | 0 | 0 | The paper is a virtual screening study for Alzheimer's disease drug repurposing and does not report any pharmacokinetic parameters for conivaptan. |
| popPK | Fernández-Varo_2003 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (urine volume, osmolality, hemodynamics) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for conivaptan. |
| popPK | García-Arroyo_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal injury in rats where conivaptan is used as a pharmacological tool to block vasopressin receptors, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for conivaptan. |
| popPK | Goldsmith_2011 | irrelevant | 0 | 0 | The study focuses on renal and hemodynamic effects (diuresis, GFR, blood flow) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Golestaneh_2004 | irrelevant | 0 | 0 | The text is a narrative review discussing the mechanism and clinical context of vasopressin antagonists without reporting any quantitative pharmacokinetic parameters for conivaptan. |
| PD | Golestaneh_2004 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and clinical context of vaptans without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Human_2012 | irrelevant | 0 | 0 | The study reports clinical efficacy (serum sodium response) rather than pharmacokinetic parameters (CL, V, t1/2) for conivaptan. |
| popPK | Lica-Miler_2026 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Marbury_2017 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life, relative clearance changes) for conivaptan in humans, but specific absolute values for clearance and volume are not explicitly listed in the provided text. |
| popPK | Moen_2008 | irrelevant | 0 | 0 | The text describes clinical efficacy and safety outcomes (serum sodium changes) rather than pharmacokinetic disposition parameters. |
| popPK | Palmer_2016 | irrelevant | 2 | 0 | The paper mentions pharmacokinetics were measured but provides no quantitative PK parameter values (CL, V, etc.) in the evidence, only qualitative statements about dose proportionality. |
| popPK | Rianthavorn_2008 | irrelevant | 0 | 0 | The paper is a clinical case report describing the use of conivaptan for SIADH and does not report any quantitative pharmacokinetic parameters. |
| popPK | Roy_2013 | relevant | 8 | 2 | The study reports PK parameters for conivaptan, but the evidence only provides relative percentage changes (e.g., 73% higher C48) rather than absolute numeric values for clearance, volume, or half-life. |
| popPK | Singh_2024 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking study for neuroglioma where conivaptan is a screened ligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Singh_2024 | not_relevant | 0 | 0 | The paper is an in silico study (molecular docking and simulation) for drug repurposing and does not report any in vivo or in vitro pharmacodynamic data, exposure-response relationships, or numeric PD parameters for conivaptan. |
| popPK | Vidic_2019 | irrelevant | 0 | 0 | The paper is a clinical outcome study on heart failure treatment and does not report any pharmacokinetic parameters for conivaptan. |
| popPK | Walter_2007 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics generally but does not provide specific quantitative disposition parameters (CL, V, etc.) for conivaptan in the provided text. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study focuses on the cholesterol-lowering mechanism of DHCR24 inhibitors, with conivaptan serving only as a candidate compound in a virtual screen and biological assay, reporting no pharmacokinetic parameters. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper reports an IC50 for irbesartan, but conivaptan is only mentioned as a candidate with qualitative activity; no numeric PD parameters or exposure-response relationship are provided for conivaptan. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Yang_2020 | not_relevant | 0 | 0 | The provided text is a title of a review article regarding drug repurposing for coronaviruses and contains no specific data, models, or numeric parameters for conivaptan. |
| popPK | Yatsu_1999 | irrelevant | 2 | 0 | The study reports hemodynamic and renal effects (pharmacodynamics) in dogs but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Zeltser_2010 | irrelevant | 0 | 0 | The text is a clinical review discussing efficacy and safety, containing no quantitative pharmacokinetic parameters for conivaptan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
