<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;}]"></div>

# amifampridine

- **generic name:** amifampridine
- **ATC codes:** `N07XX05`
- **DrugBank:** [DB11640](https://go.drugbank.com/drugs/DB11640) · **PubChem:** none
- **molar mass:** 109.132 g/mol (C5H7N3) — DrugBank
- **groups:** approved

## About

Amifampridine is a potassium channel blocker used to treat Lambert-Eaton myasthenic syndrome and myasthenia gravis. It is approved and authorised in the European Union, where two products are on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411707](https://www.wikidata.org/wiki/Q411707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 3,4-diaminopyridine (amifampridine) | metabolite | 109.132 | C5H7N3 | PubChem | [5918](https://pubchem.ncbi.nlm.nih.gov/compound/5918) | Thakkar_2017 |
| 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) | metabolite | 151.169 | C7H9N3O | PubChem | [11593462](https://pubchem.ncbi.nlm.nih.gov/compound/11593462) | Thakkar_2017 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 107.7 | L/h | 107.7 L/h | patients with Lambert-Eaton myasthenia | 49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) |
| V | V1/F | 72.6 | L | 72.6 L | patients with Lambert-Eaton myasthenia | 49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) |
| ka | kabs | 1.1 | 1/h | 1.1 h−1 | patients with Lambert-Eaton myasthenia | 49 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Thakkar_2017_reference](drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference.md) | model (no simulator) | 1-compartment, oral | 7 (+1 cov.) | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Thakkar_2017_3TUG](drugs/drug_amifampridine/pd_Thakkar_2017_3TUG.md) | Triple Timed Up & Go ← 3,4-DAP · direct Emax (saturable) effect | model (no simulator) | Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amifampridine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | blood | `NAT1` substrate | DrugBank actor |
| metabolism | liver | `NAT1` substrate, `NAT2` substrate | DrugBank actor |
| metabolism | small intestine | `NAT2` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: KCNA1 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:19 | 3:10 | 1/0/0 | 1/0/0 | 0/0/0 | 194,347/10,933 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 51 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul-Mutakabbir_2020 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin, vancomycin, daptomycin, and cefazolin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Barber_2015 | irrelevant | 0 | 0 | Study concerns ceftaroline/daptomycin/rifampin against MRSA in an in vitro model; amifampridine is not involved. |
| popPK | Bellissant_1994 | irrelevant | 0 | 0 | This is a PK/PD study of pinacidil, not amifampridine; no amifampridine disposition parameters are reported. |
| popPK | Bulkeley_2021 | irrelevant | 0 | 0 | This is a bull sperm mitochondrial function study; amifampridine is not involved and no PK parameters are reported. |
| popPK | Dehdab_2024 | irrelevant | 0 | 0 | This is an imaging study on AI denoising in TIPSS CBCT; no amifampridine PK parameters are reported anywhere. |
| popPK | Ferguson_2019 | irrelevant | 0 | 0 | This is an epidemiological study of organophosphate pesticide metabolites (DAPs) and fetal growth; amifampridine is not mentioned and no PK parameters for it exist. |
| popPK | Hall_2016 | irrelevant | 0 | 0 | Study of daptomycin/fosfomycin against VRE; amifampridine is not mentioned and no PK parameters for it appear. |
| popPK | Kebriaei_2023 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of dalbavancin and daptomycin against S. aureus; amifampridine is not mentioned at all. |
| popPK | Kunz_2024 | irrelevant | 0 | 0 | In vitro/ex vivo phage-antibiotic synergy study of daptomycin against MRSA with no amifampridine or PK parameters. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | Study on phthalate ester toxicity in algae; no amifampridine PK data at all. |
| popPK | Mancheño-Losa_2025 | irrelevant | 0 | 0 | This is an in vitro PK/PD study of ceftobiprole and daptomycin against MRSA biofilm; amifampridine is not mentioned and no amifampridine PK parameters exist. |
| popPK | Sanders_2017 | irrelevant | 0 | 0 | This is a radiation exposure study for hip injections with no amifampridine PK data whatsoever. |
| popPK | Smith_2015 | irrelevant | 0 | 0 | In vitro PK/PD study of daptomycin and β-lactams against enterococci; amifampridine is not involved and no disposition parameters are reported. |
| popPK | Warman_1994 | irrelevant | 0 | 0 | This is a computational electrophysiology model of hippocampal neurons with no amifampridine PK data. |
| popPK | Yamada_2020 | irrelevant | 0 | 0 | This is a population PK study of daptomycin, not amifampridine; no amifampridine parameters are reported. |
| popPK | du_2019 | irrelevant | 0 | 0 | Study of prostatic artery embolization outcomes; no amifampridine PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamifampridine%5D&body=Drug%3A%20amifampridine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amifampridine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 04:17 UTC</sub>
