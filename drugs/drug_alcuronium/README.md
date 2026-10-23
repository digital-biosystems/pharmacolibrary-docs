<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;alcuronium&quot;}]"></div>

# alcuronium

- **generic name:** alcuronium
- **ATC codes:** `M03AA01`
- **DrugBank:** [DB13648](https://go.drugbank.com/drugs/DB13648) · **PubChem:** not captured
- **molar mass:** 666.909 g/mol (C44H50N4O2) — DrugBank
- **groups:** experimental

## About

Alcuronium is a peripherally acting muscle relaxant belonging to the curare alkaloid group. It is not an approved medicine today and appears only as an experimental compound, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074375](https://www.wikidata.org/wiki/Q27074375) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alcuronium | parent | 666.909 | C44H50N4O2 | DrugBank | — | Walker_1983 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Walker_1983_reference](drugs/drug_alcuronium/Alcuronium_Walker1983_reference.md) | — | 1-compartment (no model) | 1 | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Franken_2000_3H_NMS_binding](drugs/drug_alcuronium/pd_Franken_2000_3H_NMS_binding.md) | Equilibrium binding of [3H]NMS at M2-receptors biomarker turnover ← alcuronium | — | Franken C et al., Testing the specificity of allosteric m…, Naunyn-Schmiedeberg's archi… (2000) | [10.1007/s002109900176](https://doi.org/10.1007/s002109900176) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Franken_2000_3H_NMS_dissociation](drugs/drug_alcuronium/pd_Franken_2000_3H_NMS_dissociation.md) | [3H]NMS dissociation at M2-receptors biomarker turnover ← alcuronium | — | Franken C et al., Testing the specificity of allosteric m…, Naunyn-Schmiedeberg's archi… (2000) | [10.1007/s002109900176](https://doi.org/10.1007/s002109900176) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Walker_1983_paralysis](drugs/drug_alcuronium/pd_Walker_1983_paralysis.md) | paralysis ← alcuronium · direct Emax (saturable) effect | — | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alcuronium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA7 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:56 | 0:54 | 0/1/0 | 2/0/0 | 0/0/0 | 33,226/2,567 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Walker_1980.pdf` | Walker J et al., Clinical pharmacokinetics of alcuronium…, European journal of clinica… (1980) | popPK | 10 | [10.1007/BF00570163](https://doi.org/10.1007/BF00570163) | [7398736](https://pubmed.ncbi.nlm.nih.gov/7398736) | The paper reports quantitative pharmacokinetic parameters (CL, Vd, t1/2) for alcuronium in humans, with specific mean values provided in the text. |
| `Walker_1983.pdf` | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | popPK | 9 | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) | [6831830](https://pubmed.ncbi.nlm.nih.gov/6831830) | The paper reports the PK/PD kinetics of alcuronium in humans, specifically providing the effect site equilibration rate constant (ke0) and effect concentration (C95), which are core pharmacokinetic/pharmacodynamic parameters, although standard disposition parameters like CL and V are only stated to be consistent with previous data rather than explicitly listed here. |
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 | not captured | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Birmingham_1980.pdf` | Birmingham AT et al., A comparison of the skeletal neuromuscu…, British journal of pharmaco… (1980) | pd | 4 | [10.1111/j.1476-5381.1980.tb08730.x](https://doi.org/10.1111/j.1476-5381.1980.tb08730.x) | [6108148](https://www.ncbi.nlm.nih.gov/pubmed/6108148) | metadata signals extractable PD data (concentration-effect) |
| `Schuh_1981.pdf` | Schuh FT, [On dose-response curves and the recept…, Der Anaesthesist (1981) | pd | 4 | not captured | [6455927](https://www.ncbi.nlm.nih.gov/pubmed/6455927) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T01:56:05.248026+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Birmingham_1980 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Buzello_1978 | irrelevant | 1 | 0 | This is a review paper that synthesizes data from the literature without providing original quantitative parameter values for alcuronium in the text. |
| popPK | Buzello_1978_2 | irrelevant | 2 | 0 | The paper is a theoretical analysis of literature data describing a model mechanism, and the extracted evidence contains no specific numeric PK parameter values (CL, V, ka) for alcuronium. |
| popPK | Franken_2000 | irrelevant | 0 | 0 | This is an in-vitro binding/mechanistic study of receptor allosteric modulation, not a pharmacokinetic study of alcuronium disposition parameters. |
| popPK | Schmitt_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam, with alcuronium used only as a co-administered neuromuscular blocker without PK analysis. |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | The study describes dose-response curves for neuromuscular blockade (pharmacodynamics) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for alcuronium. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of allosteric modulation of muscarinic receptors, not a pharmacokinetic study of alcuronium. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | The study focuses on receptor binding affinity (pKi) of alcuronium at M2 receptors in porcine heart tissue, not on pharmacokinetic disposition parameters. |
| popPK | Zahn_2002 | irrelevant | 0 | 0 | The study is a pharmacological/mechanistic investigation of allosteric receptor modulation in tissue and cell models, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zlotos_2004 | irrelevant | 0 | 0 | The study is an in vitro SAR/QSAR binding assay for caracurine analogues, and alcuronium is only mentioned as a reference for binding affinity, not as the subject of a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:56 UTC</sub>
