<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;drotaverine&quot;}]"></div>

# drotaverine

- **generic name:** drotaverine
- **ATC codes:** `A03AD02`
- **DrugBank:** [DB06751](https://go.drugbank.com/drugs/DB06751) · **PubChem:** [CID 1712095](https://pubchem.ncbi.nlm.nih.gov/compound/1712095)
- **molar mass:** 397.5072 g/mol (C24H31NO4) — DrugBank
- **groups:** approved, withdrawn

## About

Drotaverine is a papaverine-like antispasmodic used to relieve smooth-muscle spasms, especially of the gastrointestinal tract. It has been approved in some countries but withdrawn in others, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q831929](https://www.wikidata.org/wiki/Q831929) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=drotaverine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), PDE4A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:26 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 7,123/249 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vargay_1984.pdf` | Vargay Z et al., The fate of drotaverine-acephyllinate i…, European journal of drug me… (1984) | popPK | 9 | [10.1007/BF03189602](https://doi.org/10.1007/BF03189602) | [6546919](https://pubmed.ncbi.nlm.nih.gov/6546919) | The study reports human pharmacokinetics of drotaverine using a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Kapui_1992.pdf` | Kapui Z et al., Comparative studies of drotaverine--ace…, Thrombosis research (1992) | pd | 4 | [10.1016/0049-3848(92)90045-c](https://doi.org/10.1016/0049-3848(92)90045-c) | [1519228](https://www.ncbi.nlm.nih.gov/pubmed/1519228) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04 12:26 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kapui_1992 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Kapui_1992 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |
| popPK | Kraupp_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on purine transport inhibition where drotaverine is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kraupp_1994 | not_relevant | 1 | 0 | The paper reports IC50 values for papaverine and qualitatively describes drotaverine as a "moderately inhibitory" analog, but provides no numeric PD parameters or concentration-effect data for drotaverine. |
| popPK | Pavel_2017 | irrelevant | 0 | 0 | The paper describes in vitro cytostatic activity and cell cycle effects, not pharmacokinetic disposition parameters. |
| popPK | Rutz-Coudray_1979 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Tarachowski_1991 | irrelevant | 0 | 0 | The paper discusses drotaverine only as a comparator drug in a study on pharmacotherapeutic forecasting using aminophenazone, and no quantitative PK parameters for drotaverine are reported. |
| PD | Tarachowski_1991 | not_relevant | 1 | 0 | The text mentions drotaverine and pharmacodynamics in the context of developing mathematical models for forecasting efficiency, but it does not provide any specific numeric PD parameters, concentration-effect curves, or detailed exposure-response data for drotaverine. |
| popPK | Tömösközi_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drotaverine's interaction with calcium channels, reporting binding affinity (IC50, KD, Bmax) rather than pharmacokinetic disposition parameters. |
| popPK | Vargay_1984 | relevant | 9 | 0 | The study reports human pharmacokinetics of drotaverine using a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Weng_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HZ08 in rats, using drotaverine only as an internal standard for the analytical method. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdrotaverine%5D&body=Drug%3A%20drotaverine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_drotaverine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
