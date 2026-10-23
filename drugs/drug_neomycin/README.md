<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;neomycin&quot;}]"></div>

# neomycin

- **generic name:** neomycin
- **ATC codes:** `A01AB08`, `A07AA01`, `B05CA09`, `D06AX04`, `J01GB05`, `R02AB01`, `S01AA03`, `S02AA07`, `S03AA01`
- **DrugBank:** [DB00994](https://go.drugbank.com/drugs/DB00994) · **PubChem:** none
- **groups:** approved, investigational, vet_approved

## About

Neomycin is an aminoglycoside antibiotic used to treat bacterial infections, applied topically on skin, eyes, and ears, and also in oral intestinal preparations. It is an approved medicine, including veterinary approval, and is used in many topical and local treatment forms.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423098](https://www.wikidata.org/wiki/Q423098) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| neomycin | parent | 614.65 | C23H46N6O13 | PubChem | [8378](https://pubchem.ncbi.nlm.nih.gov/compound/8378) | Lentzen_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Lentzen_1981_reference](drugs/drug_neomycin/Neomycin_Lentzen1981_reference.md) | — | 1-compartment (no model) | 2 | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Samuel_1968_control](drugs/drug_neomycin/Neomycin_Samuel1968_control.md) | — | 1-compartment (no model) | 3 | Samuel P et al., Effect of neomycin on exchangeable pool…, The Journal of clinical inv… (1968) | [10.1172/JCI105870](https://doi.org/10.1172/JCI105870) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ neomycin](drugs/drug_neomycin/Neomycin_Samuel1968_neomycin.md) | — | 1-compartment (no model) | 3 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ placebo](drugs/drug_neomycin/Neomycin_Samuel1968_placebo.md) | — | 1-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Parkash_2004_Ca2_i](drugs/drug_neomycin/pd_Parkash_2004_Ca2_i.md) | [Ca2+]i ← neomycin sulfate · direct sigmoid Emax (Hill) effect | — | Parkash J et al., Calbindin-D28k and calcium sensing rece…, International journal of on… (2004) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=neomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CASR (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 02:34 | 3:44 | 0/4/0 | 0/1/0 | 0/0/0 | 73,046/7,446 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 19 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Black_1983.pdf` | Black WD et al., Pharmacokinetic study of neomycin in ca…, Canadian journal of compara… (1983) | popPK | 10 |  | [6667431](https://pubmed.ncbi.nlm.nih.gov/6667431) | The paper reports quantitative two-compartment pharmacokinetic parameters (CL, V, half-lives, rate constants) for neomycin in calves with all numeric values explicitly listed in the evidence. |
| `Liu_2021_2.pdf` | Liu Y et al., Pharmacokinetics of neomycin sulfate af…, Journal of veterinary pharm… (2021) | popPK | 10 | [10.1111/jvp.12981](https://doi.org/10.1111/jvp.12981) | [34165196](https://pubmed.ncbi.nlm.nih.gov/34165196) | The study reports quantitative non-compartmental pharmacokinetic parameters (half-life, MRT, Cmax, Tmax, AUC, bioavailability) for neomycin in swine. |
| `Burrows_1987.pdf` | Burrows GE et al., Comparative pharmacokinetics of gentami…, Journal of veterinary pharm… (1987) | popPK | 9 | [10.1111/j.1365-2885.1987.tb00077.x](https://doi.org/10.1111/j.1365-2885.1987.tb00077.x) | [3586124](https://pubmed.ncbi.nlm.nih.gov/3586124) | The study reports compartmental PK parameters for neomycin in calves, but the specific numeric values are not present in the provided abstract text. |
| `Lentzen_1981.pdf` | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | popPK | 9 |  | [7198477](https://pubmed.ncbi.nlm.nih.gov/7198477) | The study reports quantitative PK parameters (half-lives, Tmax, AUC ratios) for neomycin in humans using a two-compartment model. |

<sub>queue written 2026-10-04 02:31 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alcaraz-Estrada_2013 | irrelevant | 0 | 0 | The paper describes the construction of a viral replicon system where neomycin phosphotransferase is used as a selection marker for cell lines, not a pharmacokinetic study of neomycin. |
| PD | Alcaraz-Estrada_2013 | not_relevant | 0 | 0 | The paper describes the construction of a viral replicon system for antiviral screening; neomycin is mentioned only as a selection marker (G418 resistance) and no pharmacodynamic or exposure-response data for neomycin is reported. |
| popPK | Burrows_1987 | relevant | 9 | 2 | The study reports compartmental PK parameters for neomycin in calves, but the specific numeric values are not present in the provided abstract text. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | Neomycin is used only as a component of an antibiotic cocktail to prepare pseudo germ-free rats, not as the subject drug for PK parameter estimation. |
| popPK | Maeng_2019 | irrelevant | 0 | 0 | The study investigates the effect of topical steroids on intraocular pressure and mentions neomycin only as a component of a combination ophthalmic preparation, without reporting any pharmacokinetic parameters for neomycin. |
| popPK | Mishra_2024 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and PK-PD simulation for neomycin in rabbit tear fluid/cornea, but no specific quantitative PK parameter values (CL, V, t1/2, etc.) are reported in the text. |
| popPK | Parkash_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in breast cancer cells where neomycin is used as a probe agent, not a pharmacokinetic study of neomycin disposition. |
| popPK | Ponce_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of TRPV4 channels in MDCK cells, where neomycin is used only as a phospholipase C inhibitor (mechanistic tool) and no pharmacokinetic parameters for neomycin are reported. |
| PD | Ponce_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of ouabain (reporting an EC50), not neomycin; neomycin is only mentioned as an inhibitor used to probe signaling pathways. |
| popPK | Rodriguez_2024 | irrelevant | 0 | 0 | The study investigates the protective effects of Castanopsis echinocarpa on hearing loss, using neomycin only as an ototoxic agent to induce injury in zebrafish, and does not report any pharmacokinetic parameters for neomycin. |
| popPK | Samuel_1968 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cholesterol (a tracer) in humans, using neomycin as a therapeutic agent to alter cholesterol pools, rather than measuring the disposition parameters of neomycin itself. |
| popPK | Sandmann_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of muscarinic receptors where neomycin is used as a pharmacological inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Sandmann_1991 | not_relevant | 1 | 1 | The paper reports a single-point inhibition percentage (50% and 20%) for neomycin at a fixed concentration (1 mM) without providing a dose-response curve or numeric PD parameters like IC50. |
| popPK | Seol_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling where neomycin is used solely as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Seol_2005 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill coefficient) for sphingosine-1-phosphate (S1P), not for neomycin, which is only mentioned as a qualitative inhibitor of the pathway. |
| popPK | Soback_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mecillinam in calves, with neomycin only mentioned as a comparator for antimicrobial susceptibility (MIC). |
| popPK | Teng_1997 | irrelevant | 0 | 0 | The study investigates the mechanism of platelet aggregation by rugosin E, using neomycin only as a non-specific inhibitor/comparator, and reports no pharmacokinetic parameters for neomycin. |
| PD | Teng_1997 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for rugosin E, not neomycin; neomycin is only mentioned qualitatively as an inhibitor without numeric dose-response data. |
| popPK | Wehling_1995 | irrelevant | 0 | 0 | The paper studies the nongenomic effects of aldosterone on calcium signaling, using neomycin only as a pharmacological inhibitor to probe mechanism, not as a subject of PK analysis. |
| PD | Wehling_1995 | not_relevant | 0 | 0 | The paper reports PD parameters for aldosterone and other steroids, not for neomycin, which is only mentioned as an inhibitor of the aldosterone effect. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study investigates the antiviral activity of geneticin and other aminoglycosides in vitro, with neomycin serving only as a comparator agent showing weak activity, and no pharmacokinetic parameters are reported. |
| PD | Zhang_2009 | not_relevant | 0 | 0 | The paper reports PD parameters for geneticin (G418), not neomycin; neomycin is only mentioned as having weak activity without specific numeric PD parameters. |
| popPK | Ziv_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of apramycin in calves, with neomycin serving only as a comparator for in vitro MICs. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bneomycin%5D&body=Drug%3A%20neomycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_neomycin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-04 02:32 UTC</sub>
