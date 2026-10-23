<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;clobetasol&quot;}]"></div>

# clobetasol

- **generic name:** clobetasol
- **ATC codes:** `D07AD01`, `D07CD01`, `S01BA17`
- **DrugBank:** [DB11750](https://go.drugbank.com/drugs/DB11750) · **PubChem:** [CID 5311051](https://pubchem.ncbi.nlm.nih.gov/compound/5311051)
- **molar mass:** 410.907 g/mol (C22H28ClFO4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Clobetasol is a very potent topical corticosteroid used to treat inflammatory skin conditions such as various forms of dermatitis, including on the face, scalp, legs, and hands. It is an approved medicine, widely used in dermatology, and is also available in combination with antibiotics for skin use and as an ophthalmic anti-inflammatory agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4224007](https://www.wikidata.org/wiki/Q4224007) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zvidzayi_2021_AUEC](drugs/drug_clobetasol/pd_Zvidzayi_2021_AUEC.md) | skin blanching response ← Clobetasol propionate · direct Emax (saturable) effect | — | Zvidzayi M et al., A Novel Approach to Assess the Potency…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091456](https://doi.org/10.3390/pharmaceutics13091456) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Tapfumaneyi_2022_VCA](drugs/drug_clobetasol/pd_Tapfumaneyi_2022_VCA.md) | skin blanching ← clobetasol propionate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clobetasol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:02 | 0:25 | 0/0/0 | 1/1/0 | 0/0/0 | 43,672/2,446 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cechin_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NF-κB activation inhibition by glucocorticoids, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rath_2022 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic potency (Emax) via the vasoconstrictor assay, not pharmacokinetic parameters (CL, V, ka). |
| popPK | Suzuki_2015 | irrelevant | 0 | 0 | The study focuses on environmental monitoring and in vitro receptor agonist potency, not pharmacokinetic disposition parameters. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic potency classification using an Emax model for skin blanching, not pharmacokinetic disposition parameters (CL, V, t1/2) for clobetasol. |
| popPK | Tsai_2004 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (E(max), ED(50) from vasoconstriction assays) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for clobetasol. |
| popPK | Weng_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing topical tacrolimus and clobetasol for oral lichen planus, containing no pharmacokinetic data. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency parameters (Emax, ED50) from a vasoconstrictor assay rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for clobetasol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
