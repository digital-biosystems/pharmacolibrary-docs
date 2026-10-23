<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07C&quot;,&quot;href&quot;:&quot;atc/N07C.md&quot;},{&quot;label&quot;:&quot;cinnarizine&quot;}]"></div>

# cinnarizine

- **generic name:** cinnarizine
- **ATC codes:** `N07CA02`
- **DrugBank:** [DB00568](https://go.drugbank.com/drugs/DB00568) · **PubChem:** [CID 2761](https://pubchem.ncbi.nlm.nih.gov/compound/2761)
- **molar mass:** 368.524 g/mol (C26H28N2) — DrugBank
- **groups:** approved, investigational

## About

Cinnarizine is an antihistamine and calcium channel blocker used to treat vertigo and other balance disorders. It is an approved medicine, used widely in many countries, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q775073](https://www.wikidata.org/wiki/Q775073) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Castillo_1989_3H_PN200_110_binding_displacement_by_cinnarizine](drugs/drug_cinnarizine/pd_Castillo_1989_3H_PN200_110_binding_displacement_by_cinnarizi.md) | (+)-[3H]PN200-110 binding displacement by cinnarizine ← cinnarizine · inhibition effect | — | Castillo CJ et al., (+)-PN200-110 and ouabain binding sites…, Journal of neurochemistry (1989) | [10.1111/j.1471-4159.1989.tb08536.x](https://doi.org/10.1111/j.1471-4159.1989.tb08536.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lemes_2025_L1_viability](drugs/drug_cinnarizine/pd_Lemes_2025_L1_viability.md) | A. cantonensis L1 larval viability ← cinnarizine · direct sigmoid Emax (Hill) effect | — | Lemes BL et al., Structural Exploitation of Cinnarizine…, ACS infectious diseases (2025) | [10.1021/acsinfecdis.5c00634](https://doi.org/10.1021/acsinfecdis.5c00634) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lemes_2025_L3_viability](drugs/drug_cinnarizine/pd_Lemes_2025_L3_viability.md) | A. cantonensis L3 larval viability ← cinnarizine · direct sigmoid Emax (Hill) effect | — | Lemes BL et al., Structural Exploitation of Cinnarizine…, ACS infectious diseases (2025) | [10.1021/acsinfecdis.5c00634](https://doi.org/10.1021/acsinfecdis.5c00634) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Roquini_2024_Larval_motility_of_A_cantonensis_L1_viability](drugs/drug_cinnarizine/pd_Roquini_2024_Larval_motility_of_A_cantonensis_L1_viability.md) | Larval motility of A. cantonensis L1 (viability) ← cinnarizine · direct sigmoid Emax (Hill) effect | — | Roquini DB et al., Antihistamines H, ACS omega (2024) | [10.1021/acsomega.4c04773](https://doi.org/10.1021/acsomega.4c04773) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cinnarizine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1F (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), CACNA1S (inhibitor), CHRM1 (binder), DRD1 (binder), DRD2 (other/unknown), HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:56 | 0:36 | 0/0/0 | 3/0/0 | 0/0/0 | 77,938/1,637 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2010.pdf` | Li BQ et al., Effect of route of administration on th…, European journal of pharmac… (2010) | popPK | 8 | [10.1016/j.ejps.2010.03.013](https://doi.org/10.1016/j.ejps.2010.03.013) | [20307656](https://pubmed.ncbi.nlm.nih.gov/20307656) | PK study of cinnarizine in Beagle dogs with compartmental models, but numeric parameter values (CL, V, t½) are not shown in the evidence, only bioavailability 46.4%. |

<sub>queue written 2026-10-07 03:56 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Castillo_1989 | irrelevant | 0 | 0 | In-vitro binding study in bovine adrenal membranes; cinnarizine is only a displacing ligand, no PK parameters. |
| popPK | Castro_2025 | irrelevant | 0 | 0 | This is an antischistosomal efficacy study of clocinizine (a cinnarizine analogue); no PK disposition parameters for cinnarizine are reported, only generic literature statements about antihistamine half-lives. |
| popPK | Lawson_1989 | irrelevant | 0 | 0 | In-vitro rat aorta pharmacology study; cinnarizine is only a test agent at a fixed concentration, with no PK parameters. |
| popPK | Lawson_1989_2 | irrelevant | 0 | 0 | In-vitro pharmacology study of calcium antagonists in rat aortic rings; cinnarizine is only a test agent with no PK parameters. |
| popPK | Lawson_1992 | irrelevant | 0 | 0 | In-vitro rat aorta pharmacology study; cinnarizine is only a tool calcium channel antagonist, no PK parameters. |
| popPK | Lemes_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anthelmintic SAR study of cinnarizine analogues with in vitro EC50 values; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) for cinnarizine are reported. |
| popPK | Li_2010 | relevant | 8 | 3 | PK study of cinnarizine in Beagle dogs with compartmental models, but numeric parameter values (CL, V, t½) are not shown in the evidence, only bioavailability 46.4%. |
| popPK | Roquini_2024 | irrelevant | 0 | 0 | In vitro anthelmintic screening study; cinnarizine is only a tested compound with EC50 values, no PK disposition parameters (CL, V, ka, half-life) reported. |
| popPK | Siqueira_2019 | irrelevant | 1 | 2 | In vitro lipolysis/solubilization study of SNEDDS formulations; no PK disposition parameters (CL, V, ka, half-life) for cinnarizine are reported, only solubility values. |
| popPK | Spedding_1982 | irrelevant | 0 | 0 | In-vitro smooth muscle pharmacodynamics study; cinnarizine is a test drug, no PK disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcinnarizine%5D&body=Drug%3A%20cinnarizine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cinnarizine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
