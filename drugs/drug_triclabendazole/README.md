<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02B&quot;,&quot;href&quot;:&quot;atc/P02B.md&quot;},{&quot;label&quot;:&quot;triclabendazole&quot;}]"></div>

# triclabendazole

- **generic name:** triclabendazole
- **ATC codes:** `P02BX04`
- **DrugBank:** [DB12245](https://go.drugbank.com/drugs/DB12245) · **PubChem:** [CID 50248](https://pubchem.ncbi.nlm.nih.gov/compound/50248)
- **molar mass:** 359.65 g/mol (C14H9Cl3N2OS) — DrugBank
- **groups:** approved, investigational

## About

Triclabendazole is an anthelmintic in the benzimidazole family, primarily indicated for fascioliasis and paragonimiasis. It is administered orally in tablet form. This medication is widely recognized as a WHO essential medicine and is available for both human and veterinary use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q419739](https://www.wikidata.org/wiki/Q419739), [Wikipedia](https://en.wikipedia.org/wiki/Triclabendazole?oldid=1370381753) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| triclabendazole | parent | 359.65 | C14H9Cl3N2OS | DrugBank | [50248](https://pubchem.ncbi.nlm.nih.gov/compound/50248) | Alvarez-Bujidos_1993, Mestorino_2008 |
| triclabendazole sulphone (TCBZ-SO2) | metabolite | 391.647 | C14H9Cl3N2O3S | PubChem | [10340439](https://pubchem.ncbi.nlm.nih.gov/compound/10340439) | Alvarez-Bujidos_1993 |
| triclabendazole sulphoxide (triclabendazole sulphoxide (TCBZ-SO), triclabendazole sulfoxide) | metabolite | 375.648 | C14H9Cl3N2O2S | PubChem | [127657](https://pubchem.ncbi.nlm.nih.gov/compound/127657) | Alvarez-Bujidos_1993, Mestorino_2008 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub> | [Mestorino_2008_calves](drugs/drug_triclabendazole/Triclabendazole_Mestorino2008_calves.md) | — | 1-compartment (no model) | 7 | Mestorino N et al., Pharmacokinetic disposition of triclabe…, Veterinary research communi… (2008) | [10.1007/s11259-007-9000-3](https://doi.org/10.1007/s11259-007-9000-3) |
| <span class="pk-rf" hidden data-species="cattle" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ sheep](drugs/drug_triclabendazole/Triclabendazole_Mestorino2008_sheep.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Alvarez-Bujidos_1993_reference](drugs/drug_triclabendazole/Triclabendazole_AlvarezBujidos1993_reference.md) | — | general linear (no model) | 2 | Alvarez-Bujidos ML et al., Pharmacokinetics of triclabendazole in…, Comparative biochemistry an… (1993) | [10.1016/0742-8413(93)90245-g](https://doi.org/10.1016/0742-8413(93)90245-g) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:58 | 0:03 | 2/1/0 | 0/0/0 | 0/0/0 | 3,919/167 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alvarez-Bujidos_1993 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics in rabbits but does not report any gene variant, genotype, or phenotype influencing the PK parameters. |
| popPK | Chakroborty_2022 | irrelevant | 0 | 0 | The paper focuses on the flukicidal activity of abietic acid analogues in vitro, with triclabendazole only mentioned as background for drug resistance; no PK parameters are reported. |
| PGx | Chakroborty_2022 | not_relevant | 0 | 0 | The study evaluates the efficacy of novel abietane diterpenoid analogues against liver flukes and does not report pharmacogenomic effects on triclabendazole pharmacokinetics or pharmacodynamics. |
| popPK | Dupuy_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein interactions and does not report pharmacokinetic disposition parameters for triclabendazole. |
| PGx | Dupuy_2010 | not_relevant | 1 | 2 | The study investigates the interaction of triclabendazole with P-glycoprotein in a heterologous cell line, not a pharmacogenomic effect in humans. |
| popPK | Hamali_2018 | irrelevant | 0 | 0 | This is an in-vitro study of a Fasciola hepatica taurine transporter; triclabendazole is only mentioned as the drug of choice, with no PK parameters for it. |
| popPK | Viviani_2019 | irrelevant | 2 | 0 | The study involves co-administration with oxfendazole, and while it mentions PK parameters were calculated, no specific numeric values for triclabendazole alone or in combination are provided in the evidence. |
| PGx | Viviani_2019 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (between triclabendazole and oxfendazole) and contains no pharmacogenomic or genetic variant analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriclabendazole%5D&body=Drug%3A%20triclabendazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_triclabendazole/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:58 UTC</sub>
