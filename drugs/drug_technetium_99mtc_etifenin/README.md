<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09D&quot;,&quot;href&quot;:&quot;atc/V09D.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) etifenin&quot;}]"></div>

# technetium (99mTc) etifenin

- **generic name:** technetium (99mTc) etifenin
- **ATC codes:** `V09DA02`
- **DrugBank:** [DB13183](https://go.drugbank.com/drugs/DB13183) · **PubChem:** not captured
- **groups:** investigational

## About

Technetium (99mTc) etifenin is a diagnostic radiopharmaceutical used for imaging of the liver and reticuloendothelial system. It is listed as investigational and is not an established approved medicine.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 19:23 | 1:28 | 0/0/0 | 0/0/0 | 0/0/0 | 9,538/4,330 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bláha_1993.pdf` | Bláha V et al., Clearance and distribution parameters o…, Nuclear medicine and biology (1993) | popPK | 9 | [10.1016/0969-8051(93)90140-p](https://doi.org/10.1016/0969-8051(93)90140-p) | [8461884](https://pubmed.ncbi.nlm.nih.gov/8461884) | The study analyzes 99mTc-EHIDA clearance and distribution half-times in patients, but no numeric parameter values are present in the provided evidence. |
| `Coenegracht_1983.pdf` | Coenegracht JM et al., The influence of bilirubin, alcohol and…, European journal of nuclear… (1983) | popPK | 9 | [10.1007/BF00252882](https://doi.org/10.1007/BF00252882) | [6861781](https://pubmed.ncbi.nlm.nih.gov/6861781) | Human EHIDA uptake and excretion kinetics are modeled, but no numeric parameter values are provided. |
| `Kurihara_1990.pdf` | Kurihara N, [Hepatic mean transit time of 99mTc-EHI…, Nihon Shokakibyo Gakkai zas… (1990) | popPK | 8 | not captured | [2329733](https://pubmed.ncbi.nlm.nih.gov/2329733) | Human hepatic transit and blood-clearance measures are reported for 99mTc-EHIDA, but their numeric values are not provided. |

<sub>queue written 2026-10-07T19:23:47.431877+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansari_1989 | irrelevant | 1 | 0 | Human hepatobiliary imaging study with qualitative tracer disposition but no quantitative pharmacokinetic parameter values. |
| popPK | Bláha_1993 | relevant | 9 | 0 | The study analyzes 99mTc-EHIDA clearance and distribution half-times in patients, but no numeric parameter values are present in the provided evidence. |
| popPK | Cheng_2008 | irrelevant | 0 | 0 | The study models Tc-99m EHIDA, not technetium_99mtc_etifenin, and provides no target-drug values. |
| popPK | Coenegracht_1983 | relevant | 9 | 0 | Human EHIDA uptake and excretion kinetics are modeled, but no numeric parameter values are provided. |
| popPK | Du_2008 | irrelevant | 1 | 0 | Human imaging study reports liver-function indices, not quantitative pharmacokinetic disposition parameters. |
| popPK | Kurihara_1990 | relevant | 8 | 1 | Human hepatic transit and blood-clearance measures are reported for 99mTc-EHIDA, but their numeric values are not provided. |
| popPK | Mackie_1986 | irrelevant | 1 | 1 | 99Tcm-EHIDA is used as a scintigraphic tracer, and the reported gastric evacuation half-life is not a drug disposition parameter. |
| popPK | Owunwanne_1990 | irrelevant | 1 | 0 | Tc-99m EHIDA is used as a diagnostic agent, and no numeric pharmacokinetic parameter values are reported. |
| popPK | Zhou_1987 | irrelevant | 0 | 0 | 99mTc-etifenin is only a comparator, and its disposition is described qualitatively without numeric parameters. |
| popPK | Zimácek_1990 | irrelevant | 2 | 5 | The diagnostic study reports numeric blood-clearance half-times and retention, but no qualifying disposition model or CL/V parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
