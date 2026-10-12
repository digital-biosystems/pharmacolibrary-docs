<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;acemetacin&quot;}]"></div>

# acemetacin

- **generic name:** acemetacin
- **ATC codes:** `M01AB11`
- **DrugBank:** [DB13783](https://go.drugbank.com/drugs/DB13783) · **PubChem:** [CID 1981](https://pubchem.ncbi.nlm.nih.gov/compound/1981)
- **molar mass:** 415.83 g/mol (C21H18ClNO6) — DrugBank
- **groups:** approved

## About

Acemetacin is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in musculoskeletal and rheumatic conditions. It is an approved medicine, used mainly in some European countries, though it is not authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2723146](https://www.wikidata.org/wiki/Q2723146) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:37 | 2:12 | 0/0/0 | 1/0/0 | 0/0/0 | 42,841/1,276 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other animal</span> | [Suzuki_2018_CAP](drugs/drug_acemetacin/pd_Suzuki_2018_CAP.md) | peak amplitude of compound action potential ← acemetacin · direct Emax (saturable) effect | — | Suzuki R et al., Inhibition by non-steroidal anti-inflam…, Biomedicine & pharmacothera… (2018) | [10.1016/j.biopha.2018.04.041](https://doi.org/10.1016/j.biopha.2018.04.041) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chávez-Piña_2009.pdf` | Chávez-Piña AE et al., Pharmacokinetics of acemetacin and its…, Annals of hepatology (2009) | popPK | 9 | not captured | [19502658](https://pubmed.ncbi.nlm.nih.gov/19502658) | The paper reports pharmacokinetic studies of acemetacin in rats, but the extracted evidence contains only qualitative results (increased/reduced bioavailability) without specific numeric values for clearance, volume, or half-life. |
| `Seissiger_1987.pdf` | Seissiger L et al., [Acemetacin in patients with rheumatic…, Zeitschrift fur Rheumatolog… (1987) | popPK | 9 | not captured | [3439372](https://pubmed.ncbi.nlm.nih.gov/3439372) | The study reports quantitative PK parameters (Cmax, half-life, AUC) for acemetacin in humans with liver disease, although clearance and volume of distribution are not explicitly provided. |
| `Dell_1980.pdf` | Dell HD et al., [Metabolism and pharmacokinetics of ace…, Arzneimittel-Forschung (1980) | popPK | 7 | not captured | [7191306](https://pubmed.ncbi.nlm.nih.gov/7191306) | The study reports pharmacokinetic parameters (half-life, bioavailability) for acemetacin, but specific values for clearance and volume of distribution are not explicitly listed in the provided abstract text, with detailed data likely in figures or tables not included here. |
| `Jones_1991.pdf` | Jones RW et al., The comparative pharmacokinetics of ace…, British journal of clinical… (1991) | popPK | 7 | [10.1111/j.1365-2125.1991.tb05577.x](https://doi.org/10.1111/j.1365-2125.1991.tb05577.x) | [1888622](https://pubmed.ncbi.nlm.nih.gov/1888622) | The paper reports pharmacokinetic parameters (half-life, Tmax, AUC mentioned) for acemetacin, but specific quantitative values for clearance (CL), volume (V), and absorption rate (ka) are not provided in the evidence, and only half-life values are explicitly listed. |

<sub>queue written 2026-10-07T00:37:44.690963+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chávez-Piña_2009 | relevant | 9 | 2 | The paper reports pharmacokinetic studies of acemetacin in rats, but the extracted evidence contains only qualitative results (increased/reduced bioavailability) without specific numeric values for clearance, volume, or half-life. |
| popPK | Dell_1980 | relevant | 7 | 2 | The study reports pharmacokinetic parameters (half-life, bioavailability) for acemetacin, but specific values for clearance and volume of distribution are not explicitly listed in the provided abstract text, with detailed data likely in figures or tables not included here. |
| popPK | Hirai_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacological mechanism of indomethacin on CRTH2 receptors, and acemetacin is only mentioned as a comparator that lacks agonist activity, with no pharmacokinetic data provided. |
| popPK | Jones_1991 | relevant | 7 | 3 | The paper reports pharmacokinetic parameters (half-life, Tmax, AUC mentioned) for acemetacin, but specific quantitative values for clearance (CL), volume (V), and absorption rate (ka) are not provided in the evidence, and only half-life values are explicitly listed. |
| popPK | Konoshita_2004 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of acemetacin as a co-administered agent in the treatment of nephrogenic diabetes insipidus, reporting only fluid balance and electrolyte data, with no pharmacokinetic parameters. |
| popPK | Ribeiro_2022 | irrelevant | 1 | 0 | The paper is a narrative review of NSAIDs and contains no original quantitative pharmacokinetic parameter values for acemetacin. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | This is a pharmacoepidemiological study analyzing drug interaction prevalence in prescription databases and does not contain pharmacokinetic parameters for acemetacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
