<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;fexinidazole&quot;}]"></div>

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
| fexinidazole sulfone | metabolite | 311.312 | C12H13N3O5S | PubChem | [21429076](https://pubchem.ncbi.nlm.nih.gov/compound/21429076) | Watson_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:20 | 2:29 | 0/1/0 | 0/1/1 | 0/0/0 | 165,187/13,064 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Watson_2019_reference](drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md) | — | 1-compartment (no model) | 0 | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Verrest_2024_Blood_Leishmania_parasite_load](drugs/drug_fexinidazole/pd_Verrest_2024_Blood_Leishmania_parasite_load.md) | Blood Leishmania parasite load ← fexinidazole and its active metabolites M1 and M2 · direct linear effect | — | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_ALT](drugs/drug_fexinidazole/pd_Watson_2019_ALT.md) | peak observed serum alanine aminotransferase (ALT) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_AST](drugs/drug_fexinidazole/pd_Watson_2019_AST.md) | peak observed serum aspartate aminotransferase (AST) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_hemoglobin](drugs/drug_fexinidazole/pd_Watson_2019_hemoglobin.md) | nadir observed hemoglobin ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_lymphocytes](drugs/drug_fexinidazole/pd_Watson_2019_lymphocytes.md) | nadir observed lymphocyte counts ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_neutrophils](drugs/drug_fexinidazole/pd_Watson_2019_neutrophils.md) | nadir observed blood neutrophil counts ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_platelets](drugs/drug_fexinidazole/pd_Watson_2019_platelets.md) | nadir observed platelet counts ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cumming_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of RNA Polymerase 1 inhibitor Compound 2 (BMH-21/LI-623), not fexinidazole, which is only mentioned as a background therapeutic for context. |
| popPK | Fersing_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (half-life, AUC, clearance) for a novel synthesized compound (19) in mice, using fexinidazole only as an in vitro reference drug. |
| popPK | Fersing_2020_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for a novel nitroimidazole derivative (compound 8), not fexinidazole, which is only used as a comparator/reference drug. |
| popPK | Paoli-Lombardo_2022 | irrelevant | 0 | 0 | This is an in vitro SAR study of new antileishmanial compounds, and fexinidazole is used only as a reference/comparator drug, with no population PK parameters reported for it. |
| popPK | Rivas_2024 | irrelevant | 0 | 0 | The paper focuses on new Ru(II) compounds against trypanosomes; fexinidazole is mentioned only as background context for available drugs, and no PK parameters for fexinidazole are reported. |
| popPK | Rocha-Hasler_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of posaconazole and tomatidine against T. cruzi where fexinidazole is used only as a reference comparator drug, with no PK parameters reported. |
| popPK | Verrest_2024 | irrelevant | 3 | 0 | The study focuses on parasite pharmacodynamics; fexinidazole PK parameters are from a previous internal report and are not numerically reported in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:18 UTC</sub>
