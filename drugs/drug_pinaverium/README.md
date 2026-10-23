<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;pinaverium&quot;}]"></div>

# pinaverium

- **generic name:** pinaverium
- **ATC codes:** `A03AX04`
- **DrugBank:** [DB09090](https://go.drugbank.com/drugs/DB09090) · **PubChem:** [CID 40704](https://pubchem.ncbi.nlm.nih.gov/compound/40704)
- **molar mass:** 511.52 g/mol (C26H41BrNO4) — DrugBank
- **groups:** approved, investigational

## About

Pinaverium is a calcium channel blocker used to treat functional gastrointestinal disorders such as irritable bowel syndrome. It is an approved drug, but it is not authorised in the European Union and appears to be used only in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1236146](https://www.wikidata.org/wiki/Q1236146) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:03 | 0:26 | 0/0/0 | 0/0/0 | 0/0/0 | 17,454/454 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Patiño-Rodríguez_2015.pdf` | Patiño-Rodríguez O et al., Determination of Pinaverium Bromide in…, Journal of chromatographic… (2015) | popPK | 10 | [10.1093/chromsci/bmv027](https://doi.org/10.1093/chromsci/bmv027) | [25862744](https://pubmed.ncbi.nlm.nih.gov/25862744) | The paper describes a pharmacokinetic study of pinaverium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Ren_2011.pdf` | Ren JM et al., A sensitive and specific liquid chromat…, Biomedical chromatography :… (2011) | popPK | 10 | [10.1002/bmc.1611](https://doi.org/10.1002/bmc.1611) | [21308709](https://pubmed.ncbi.nlm.nih.gov/21308709) | The paper describes a PK study of pinaverium in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract and method validation details. |
| `Arısoy_2022.pdf` | Arısoy M et al., A Study to Compare Bioequivalence Appro…, Journal of pharmaceutical s… (2022) | popPK | 8 | [10.1016/j.xphs.2022.08.010](https://doi.org/10.1016/j.xphs.2022.08.010) | [35981633](https://pubmed.ncbi.nlm.nih.gov/35981633) | The study is a pharmacokinetic bioequivalence trial for pinaverium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Beech_1990.pdf` | Beech DJ et al., Effects of pinaverium on voltage-activa…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14711.x](https://doi.org/10.1111/j.1476-5381.1990.tb14711.x) | [1691676](https://www.ncbi.nlm.nih.gov/pubmed/1691676) | metadata signals extractable PD data (IC50) |
| `García-Alvarado_2019.pdf` | García-Alvarado F et al., Otilonium and pinaverium trigger mitoch…, Neurotoxicology (2019) | pd | 4 | [10.1016/j.neuro.2018.11.003](https://doi.org/10.1016/j.neuro.2018.11.003) | [30448301](https://www.ncbi.nlm.nih.gov/pubmed/30448301) | metadata signals extractable PD data (EC50) |
| `Malysz_1997.pdf` | Malysz J et al., Pinaverium acts as L-type calcium chann…, Canadian journal of physiol… (1997) | pd | 4 | [10.1139/cjpp-75-8-969](https://doi.org/10.1139/cjpp-75-8-969) | [9360010](https://www.ncbi.nlm.nih.gov/pubmed/9360010) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T13:03:06.836568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arısoy_2022 | relevant | 8 | 0 | The study is a pharmacokinetic bioequivalence trial for pinaverium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Beech_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel currents in isolated cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bobo_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Boyer_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle contraction and does not report any pharmacokinetic parameters for pinaverium. |
| popPK | Bretaudeau_1975 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of spasmolytic properties, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Bretaudeau_1975 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the abstract or body text required to verify the presence of numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Dai_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle contractility and calcium influx, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | García-Alvarado_2019 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Malysz_1997 | irrelevant | 0 | 0 | The paper describes the mechanism of action (calcium channel blocking) and contains no pharmacokinetic parameters or quantitative disposition data for pinaverium. |
| PD | Malysz_1997 | not_relevant | 0 | 0 | The provided text is only a title stating the mechanism of action (L-type calcium channel blocker) and contains no data, numeric parameters, or exposure-response analysis. |
| popPK | Patiño-Rodríguez_2015 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of pinaverium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Pengfei_2024 | irrelevant | 1 | 0 | The study focuses on the antimicrobial mechanism of pinaverium against bacteria, and while it mentions "relatively poor pharmacokinetics," it does not report quantitative PK parameters (CL, V, etc.) for the drug in the provided text. |
| popPK | Ren_2011 | relevant | 10 | 0 | The paper describes a PK study of pinaverium in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract and method validation details. |
| popPK | Shrivastava_2022 | irrelevant | 0 | 0 | The paper is a review of otilonium bromide, and pinaverium is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Shrivastava_2022 | not_relevant | 0 | 0 | The paper is a mini-review on analytical methods for otilonium bromide and only qualitatively mentions pinaverium as a comparator without providing any pharmacodynamic data or parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
