<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01K&quot;,&quot;href&quot;:&quot;atc/S01K.md&quot;},{&quot;label&quot;:&quot;trypan blue&quot;}]"></div>

# trypan blue

- **generic name:** trypan blue
- **ATC codes:** `S01KX02`
- **DrugBank:** [DB09158](https://go.drugbank.com/drugs/DB09158) · **PubChem:** [CID 9562061](https://pubchem.ncbi.nlm.nih.gov/compound/9562061)
- **molar mass:** 872.87 g/mol (C34H28N6O14S4) — DrugBank
- **groups:** approved

## About

Trypan blue is a dye used in eye surgery, where it helps surgeons visualise tissue during procedures such as cataract surgery. It is an approved medicine and is used in ophthalmology as a surgical aid.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419642](https://www.wikidata.org/wiki/Q419642) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 21:14 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 117,361/1,509 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 74 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1984.pdf` | Taylor MJ et al., Comparative pharmacokinetics of trypan…, Food and chemical toxicolog… (1984) | popPK | 9 | [10.1016/0278-6915(84)90168-6](https://doi.org/10.1016/0278-6915(84)90168-6) | [6542053](https://pubmed.ncbi.nlm.nih.gov/6542053) | The paper describes a pharmacokinetic study fitting a two-compartment model for trypan blue in rats, but no numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-07T21:14:06.716702+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdeen_2025 | irrelevant | 0 | 0 | The study is an in vitro investigation of clove oil and silica nanoparticles, using trypan blue only as a viability dye for cell counting, not as a subject drug for pharmacokinetic analysis. |
| popPK | Alonso-Castro_2021 | irrelevant | 0 | 0 | The study uses trypan blue only as a reagent for the exclusion test to assess antiparasitic activity and does not report any pharmacokinetic parameters for the drug itself. |
| popPK | Chou_2000 | irrelevant | 0 | 0 | The paper studies the mechanism of action of betulinic acid on calcium levels in cell culture, and trypan blue is used only as a viability assay (diagnostic agent), not as a subject drug for pharmacokinetic analysis. |
| popPK | Gerstin_1992 | irrelevant | 0 | 0 | The paper investigates the allosteric modulatory effects of trypan blue on muscarinic receptor binding in rat heart homogenates, which is a mechanistic pharmacodynamic study, not a pharmacokinetic disposition study. |
| popPK | Hapidin_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on tannic acid and pamidronate where trypan blue is used only as a viability assay agent, not as a drug subject to PK analysis. |
| popPK | Jakob_1995 | irrelevant | 0 | 0 | The paper is a study on membrane proteins (VDAC) in B lymphocytes where trypan blue is used as a viability/counterstain, not as the subject of pharmacokinetic analysis. |
| popPK | Knoll_2004 | irrelevant | 0 | 0 | The study is an in vitro cell toxicity investigation where trypan blue is used solely as a viability stain, not as a pharmacokinetic subject drug. |
| popPK | Mooren_2016 | irrelevant | 0 | 0 | The study uses trypan blue as a viability stain for cytotoxicity assessment, not as a drug subject to pharmacokinetic modeling. |
| popPK | Pereira-Vieira_2025 | irrelevant | 0 | 0 | The study uses Trypan blue solely as a cell viability dye for counting AML cells, not as the subject drug for pharmacokinetic analysis. |
| popPK | Poirel_2020 | irrelevant | 0 | 0 | The paper is a pharmacological study on vesicular glutamate transporters (VGLUTs) in vitro and in guinea pigs, using Trypan Blue as a reference compound but not performing pharmacokinetic analysis. |
| popPK | Reinholdt_2016 | irrelevant | 0 | 0 | The study is an in vitro cell viability experiment where trypan blue is used solely as a diagnostic dye for the exclusion method to count living cells, not as a pharmacokinetic subject. |
| popPK | Reinoso_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of teicoplanin in rats, using trypan blue only as a viability stain (exclusion test) and not as the subject drug for PK analysis. |
| popPK | Sbardelotto_2021 | irrelevant | 0 | 0 | Trypan blue is used only as a diagnostic viability stain in an in vitro cytotoxicity study, with no pharmacokinetic parameters reported. |
| popPK | Silva_2018 | irrelevant | 0 | 0 | The study investigates the cytotoxic effects of dihydrochelerythrine in vitro, using trypan blue only as a viability dye (exclusion method) rather than as the subject of pharmacokinetic analysis. |
| popPK | Stanimirovic_1993 | irrelevant | 0 | 0 | Trypan blue is used only as a vital dye to assess cell viability in an in vitro endothelial cell study, not as a pharmacokinetic subject. |
| popPK | Taylor_1984 | relevant | 9 | 0 | The paper describes a pharmacokinetic study fitting a two-compartment model for trypan blue in rats, but no numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Wozniak_1999 | irrelevant | 0 | 0 | Trypan blue is used as a tracer for albumin in an in-vitro permeability assay, not as the subject drug for pharmacokinetic modeling. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
