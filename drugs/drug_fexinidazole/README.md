<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;fexinidazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexinidazole_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# fexinidazole

- **generic name:** fexinidazole
- **ATC codes:** `P01CA03`
- **DrugBank:** [DB12265](https://go.drugbank.com/drugs/DB12265) · **PubChem:** [CID 68792](https://pubchem.ncbi.nlm.nih.gov/compound/68792)
- **molar mass:** 279.31 g/mol (C12H13N3O3S) — DrugBank
- **groups:** approved

## About

Fexinidazole is an antiprotozoal medicine used to treat trypanosomiasis (sleeping sickness). It is an approved medicine and is used mainly in regions where the disease occurs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5446115](https://www.wikidata.org/wiki/Q5446115) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fexinidazole | parent | 279.31 | C12H13N3O3S | DrugBank | [68792](https://pubchem.ncbi.nlm.nih.gov/compound/68792) | Watson_2019 |
| fexinidazole sulfone (M2) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Watson_2019_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy volunteers and patients with g-HAT or chronic Chagas disease, n = 462. [Run it in the simulator](drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md?tab=Simulation) · [record](drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Watson_2019_reference](drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Verrest_2024_parasite_load](drugs/drug_fexinidazole/pd_Verrest_2024_parasite_load.md) | blood Leishmania parasite load (kDNA qPCR) ← fexinidazole (sum of M1 and M2 metabolites) · direct linear effect | model (no simulator) | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_ALT](drugs/drug_fexinidazole/pd_Watson_2019_ALT.md) | alanine aminotransferase (peak) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_AST](drugs/drug_fexinidazole/pd_Watson_2019_AST.md) | aspartate aminotransferase (peak) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_hemoglobin_concentration_nadir](drugs/drug_fexinidazole/pd_Watson_2019_hemoglobin_concentration_nadir.md) | hemoglobin concentration (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_lymphocyte_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_lymphocyte_count_nadir.md) | lymphocyte count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_neutrophil_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_neutrophil_count_nadir.md) | neutrophil count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Watson_2019_platelet_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_platelet_count_nadir.md) | platelet count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fexinidazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2B6` inducer/inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `FMO3` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:48 | 6:37 | 1/0/0 | 1/1/0 | 0/0/0 | 410,006/22,853 | ollama / glm-5.3-flash | 7 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cumming_2026 | irrelevant | 0 | 0 | This is a PK-PD study of BMH-21 analog Compound 2, not fexinidazole, which is only mentioned as background therapy; no fexinidazole disposition parameters are reported. |
| popPK | Fersing_2020 | irrelevant | 0 | 0 | Fexinidazole is only a comparator/reference drug; PK parameters (t1/2, CL, AUC) reported are for a different compound (hit 19) in mouse. |
| popPK | Fersing_2020_2 | irrelevant | 0 | 0 | Fexinidazole is only a reference/comparator drug; the PK parameters (t1/2 7.7 h, clearance 0.51 mL/h) are for compound 8, a different imidazopyridine derivative, in mouse. |
| popPK | Paoli-Lombardo_2022 | irrelevant | 0 | 0 | Medicinal chemistry SAR paper on new antileishmanial imidazopyridine derivatives; fexinidazole is only a reference comparator and no population-PK disposition parameters (CL, V, ka) for it are reported. |
| popPK | Rivas_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/in vitro study of Ru(II) ferrocenyl compounds; fexinidazole is only mentioned as background and no PK parameters are reported. |
| popPK | Rocha-Hasler_2021 | irrelevant | 0 | 0 | In vitro/in vivo efficacy study of posaconazole-tomatidine combinations against T. cruzi; fexinidazole is only a combination partner with EC50/FICI data, no PK parameters. |
| popPK | Verrest_2024 | irrelevant | 3 | 1 | This is a PK-PD model of Leishmania parasite dynamics; fexinidazole's own PK model parameters (CL etc.) come from a prior internal report/supplementary material and no numeric fexinidazole disposition values appear in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:43 UTC</sub>
