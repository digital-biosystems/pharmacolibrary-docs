<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;valaciclovir&quot;}]"></div>

# valaciclovir

- **generic name:** valaciclovir
- **ATC codes:** `J05AB11`
- **DrugBank:** [DB00577](https://go.drugbank.com/drugs/DB00577) · **PubChem:** [CID 60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773)
- **molar mass:** 324.3357 g/mol (C13H20N6O4) — DrugBank
- **groups:** approved, investigational

## About

Valaciclovir is an antiviral nucleoside analogue used to treat herpes simplex and herpes zoster infections. It is administered orally in tablet or capsule form and is well absorbed from the gastrointestinal tract. The medication is widely available as a generic product and serves as an essential treatment option in many healthcare systems.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q418594](https://www.wikidata.org/wiki/Q418594), [Wikipedia](https://en.wikipedia.org/wiki/Valaciclovir?oldid=1356290223) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| valaciclovir | parent | 324.336 | C13H20N6O4 | DrugBank | [60773](https://pubchem.ncbi.nlm.nih.gov/compound/60773) | Kably_2025, Zeng_2009 |
| 9-carboxymethoxymethylguanine | metabolite | 239.191 | C8H9N5O4 | PubChem | [135508007](https://pubchem.ncbi.nlm.nih.gov/compound/135508007) | Kably_2025 |
| aciclovir | metabolite | 225.208 | C8H11N5O3 | PubChem | [135398513](https://pubchem.ncbi.nlm.nih.gov/compound/135398513) | Kably_2025 |
| acyclovir | metabolite | 225.2 | — | the paper | — | Zeng_2009 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Kably_2025_reference](drugs/drug_valaciclovir/Valaciclovir_Kably2025_reference.md) | — | general linear (no model) | 3 | Kably B et al., Population pharmacokinetics of aciclovi…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf070](https://doi.org/10.1093/jac/dkaf070) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zeng_2009_reference](drugs/drug_valaciclovir/Valaciclovir_Zeng2009_reference.md) | — | parent + metabolite (no model) | 0 | Zeng L et al., Population pharmacokinetics of acyclovi…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.01138-08](https://doi.org/10.1128/AAC.01138-08) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:23 | 0:05 | 0/2/0 | 0/0/0 | 0/0/0 | 4,001/197 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chono_2010 | irrelevant | 0 | 0 | The study evaluates the antiviral activity of a new drug (ASP2151) with valaciclovir as a comparator, reporting no pharmacokinetic parameters for valaciclovir. |
| PGx | Chono_2010 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism and efficacy of a new drug (ASP2151) and does not report any pharmacogenomic effects on PK or PD parameters for valaciclovir. |
| popPK | Das_2023 | irrelevant | 0 | 0 | The paper is an in-vitro virology study on new antiviral analogues, not a pharmacokinetic study, and valaciclovir is only mentioned as a comparator drug. |
| PGx | Das_2023 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral efficacy of novel amide analogues, with no information on pharmacogenomic effects on the PK/PD of valaciclovir. |
| popPK | Faure-Bardon_2025 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of valaciclovir (via its metabolite aciclovir) in humans, but the evidence provided contains no numeric parameter values (CL, V, etc.). |
| PGx | Faure-Bardon_2025 | not_relevant | 0 | 0 | The paper presents a pharmacokinetic study in pregnant women, but does not analyze the influence of gene variants or genotypes on valaciclovir/aciclovir PK parameters. |
| popPK | Hamilton_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral efficacy study using acyclovir (an analog of valaciclovir's active metabolite) and other drugs, but it does not report pharmacokinetic parameters or quantitative disposition data for valaciclovir. |
| PGx | Hamilton_2020 | not_relevant | 0 | 0 | The study investigates antiviral efficacy in pregnancy models and does not contain pharmacogenomic or pharmacokinetic data for valaciclovir. |
| PGx | Kably_2025 | not_relevant | 0 | 0 | The study investigates the impact of renal function (eGFR) and liver transplantation status on pharmacokinetics, but reports no data on genetic variants, genotypes, or phenotypes. |
| popPK | Neves_2010 | irrelevant | 2 | 1 | The study reports only non-compartmental bioequivalence metrics (Cmax, AUC, geometric means/ratios) without compartmental PK parameters (CL, V, ka) or numeric concentration-time data for extraction. |
| PGx | Neves_2010 | not_relevant | 0 | 0 | The study assesses bioequivalence between tablet formulations in healthy volunteers and contains no data on gene variants or genotypes. |
| PGx | Simon_2002 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of valaciclovir in children but does not assess the impact of genetic variants, genotypes, or phenotypes on PK/PD parameters. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the binding affinity and antiviral efficacy of valaciclovir against 2019-nCoV in vitro, not its pharmacokinetic disposition parameters. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The study investigates the antiviral activity and binding affinity of valaciclovir and other drugs against 2019-nCoV/ACE2, and does not report any pharmacogenomic effects (e.g., gene variant impacts) on the PK or PD parameters of valaciclovir. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/mechanistic comparison of antiviral efficacy and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for valaciclovir. |
| PGx | Yajima_2017 | not_relevant | 0 | 0 | The paper compares the antiviral mechanisms and pharmacokinetic profiles of amenamevir, acyclovir, and foscavir, but does not report any pharmacogenomic effects of gene variants on PK or PD parameters of valaciclovir. |
| PGx | Zeng_2009 | not_relevant | 0 | 0 | The study reports population pharmacokinetics of acyclovir/valaciclovir but does not investigate genetic variants (pharmacogenomics). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalaciclovir%5D&body=Drug%3A%20valaciclovir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valaciclovir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 08:22 UTC</sub>
