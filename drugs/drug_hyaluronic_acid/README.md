<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03A&quot;,&quot;href&quot;:&quot;atc/D03A.md&quot;},{&quot;label&quot;:&quot;hyaluronic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;HyaluronicAcid_Jeon2013_reference&quot;,&quot;label&quot;:&quot;Jeon_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# hyaluronic acid

- **generic name:** hyaluronic acid
- **ATC codes:** `D03AX05`, `M09AX01`, `R01AX09`, `S01KA01`
- **DrugBank:** [DB08818](https://go.drugbank.com/drugs/DB08818) · **PubChem:** [CID 24759](https://pubchem.ncbi.nlm.nih.gov/compound/24759)
- **molar mass:** 776.6486 g/mol (C28H44N2O23) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Hyaluronic acid is a glycosaminoglycan used to treat osteoarthritis of the knee, dry eye, and wounds, as well as serving as a cosmetic filler. It is given topically for skin, ophthalmically for eye conditions, and via injection for joints or other tissues. Hyaluronic acid is widely used in medical and cosmetic settings.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q337231](https://www.wikidata.org/wiki/Q337231), [Wikipedia](https://en.wikipedia.org/wiki/Hyaluronic_acid?oldid=1384646830) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hyaluronic_acid | metabolite | 776.649 | C28H44N2O23 | DrugBank | [24759](https://pubchem.ncbi.nlm.nih.gov/compound/24759) | Lebel_1989 |

## Start here

> **Jeon_2013_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md?tab=Simulation) · [record](drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: cross_check_disputed</sub> | [Jeon_2013_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Jeon2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Jeon S et al., Saturable human neopterin response to i…, Journal of translational me… (2013) | [10.1186/1479-5876-11-240](https://doi.org/10.1186/1479-5876-11-240) |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Lebel_1989_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Lebel1989_reference.md) | — | 1-compartment (no model) | 1 | Lebel L et al., A pharmacokinetic model of intravenousl…, Pharmaceutical research (1989) | [10.1023/a:1015982204926](https://doi.org/10.1023/a:1015982204926) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Kim_2021_reference](drugs/drug_hyaluronic_acid/HyaluronicAcid_Kim2021_reference.md) | — | 2-compartment (no model) | 5 | Kim JH et al., Evaluation of Lidocaine and Metabolite…, Pharmaceutics (2021) | [10.3390/pharmaceutics13020203](https://doi.org/10.3390/pharmaceutics13020203) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:09 | 0:04 | 2/1/0 | 0/0/0 | 0/0/0 | 3,940/175 | einfracz / qwen3.8-27b | 13 | 3/10 | 13/0 | 0 |

## Coverage

- **PubMed hits:** 62 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asselman_2005 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of hyaluronan secretion and localization in renal tubular cells, not a pharmacokinetic study reporting quantitative disposition parameters for hyaluronic acid. |
| PGx | Asselman_2005 | not_relevant | 0 | 0 | The paper investigates the polarized secretion of hyaluronan by renal tubular cells in response to injury and proliferation, not the effect of genetic variants on the PK/PD of hyaluronic acid as a drug. |
| popPK | Bedair_2023 | irrelevant | 0 | 0 | The study investigates liver fibrosis markers and antinociception, using hyaluronic acid only as a biomarker of liver injury rather than as a drug subject for pharmacokinetic analysis. |
| PGx | Bedair_2023 | not_relevant | 0 | 0 | The paper focuses on the hepatoprotective and antinociceptive effects of nicorandil and morphine in rats; it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of hyaluronic acid, which is only mentioned as a biomarker for liver fibrosis. |
| popPK | Caro-León_2023 | irrelevant | 0 | 0 | The paper is a materials science study on the synthesis and characterization of chitosan derivatives, where hyaluronic acid is used only as a coating agent for nanoparticles, and no pharmacokinetic parameters are reported. |
| PGx | Caro-León_2023 | not_relevant | 0 | 0 | The paper reports on the synthesis and characterization of chitosan-based polymers; it contains no data on pharmacogenomics or drug pharmacokinetics/pharmacodynamics. |
| popPK | Egbu_2018 | irrelevant | 0 | 0 | The study focuses on in vitro release of infliximab from hyaluronic acid-based hydrogels, not the pharmacokinetics of hyaluronic acid itself. |
| PGx | Egbu_2018 | not_relevant | 0 | 0 | The paper investigates the physicochemical properties and release kinetics of drug-loaded hydrogels; it contains no pharmacogenomic data or genotype-phenotype analysis. |
| popPK | Espejo-Román_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of CD44 inhibitors (THIQ derivatives) in cancer models, treating hyaluronic acid only as a biological ligand/interaction partner, not as a subject drug for pharmacokinetic analysis. |
| PGx | Espejo-Román_2023 | not_relevant | 0 | 0 | The paper describes the design and evaluation of HA-CD44 inhibitors in cancer models, not a pharmacogenomic effect on the PK/PD of hyaluronic acid. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The paper focuses on the anticancer activity of neomenthol, using hyaluronic acid only as a substrate for hyaluronidase enzyme assays rather than as a subject drug for pharmacokinetic analysis. |
| PGx | Fatima_2021 | not_relevant | 0 | 0 | The paper investigates the anticancer effects of neomenthol on skin cancer cells and does not report pharmacogenomic effects on the PK/PD of hyaluronic acid. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | Hyaluronic acid is only a nanoparticle coating; no hyaluronic-acid pharmacokinetic disposition parameters are reported. |
| popPK | Jeon_2013 | irrelevant | 0 | 0 | The reported PK parameters are for interferon-α, while hyaluronate is only a formulation ingredient. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The quantitative PK model is for lidocaine and its metabolites, not hyaluronic acid. |
| PGx | Lebel_1989 | not_relevant | 0 | 0 | The paper describes pharmacokinetics in sheep but does not report any pharmacogenomic effects (gene variants/genotypes) on PK parameters. |
| popPK | Nunn_2021 | irrelevant | 0 | 0 | Hyaluronan is measured as a vaginal biomarker, with no pharmacokinetic disposition parameters reported. |
| popPK | Panunzio_2026 | irrelevant | 0 | 0 | The paper is a systematic review on Peyronie's disease treatment where hyaluronic acid is only mentioned as a co-administered agent, with no pharmacokinetic data. |
| PGx | Panunzio_2026 | not_relevant | 0 | 0 | The paper reviews platelet-rich plasma injections for Peyronie's disease and does not contain any pharmacogenomic data regarding hyaluronic acid. |
| popPK | Rajadhyaksha_2023 | irrelevant | 0 | 0 | Hyaluronic acid is used as a formulation excipient (component of the hydrogel) rather than the subject drug, and the pharmacokinetic parameters reported are for the model protein (scFv of trastuzumab). |
| PGx | Rajadhyaksha_2023 | not_relevant | 0 | 0 | The paper evaluates pharmacokinetics of protein therapeutics in animal models and does not report any pharmacogenomic effects. |
| popPK | Romero-Tamudo_2025 | irrelevant | 0 | 0 | The study focuses on the anticancer properties of CD44-targeted small molecules and explicitly states that in vivo pharmacokinetic validation is needed, providing no quantitative PK data for hyaluronic acid itself. |
| PGx | Romero-Tamudo_2025 | not_relevant | 0 | 0 | The paper describes the development and preclinical evaluation of small molecule CD44 inhibitors, not the pharmacokinetic or pharmacodynamic parameters of hyaluronic acid itself. |
| popPK | Ryu_2021 | relevant | 9 | 2 | The mouse study models HA-filler swelling and degradation, but rate-constant estimates are only in the omitted Table 1. |
| popPK | Salesa_2021 | irrelevant | 0 | 0 | This in-vitro nanomaterial study reports no pharmacokinetic parameters for hyaluronic acid. |
| popPK | Tschopp_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating therapeutic efficacy (pain relief) of hyaluronic acid injections, not a pharmacokinetic study, and reports no quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Tschopp_2023 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing treatments for knee osteoarthritis and does not analyze any genetic variants or their effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cetuximab, using hyaluronic acid only as a stromal biomarker rather than the subject drug. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the PK/PD of cetuximab and smoothened inhibitors in the context of hyaluronic acid as a stromal biomarker, not as the drug of interest, and does not report pharmacogenomic effects. |
| popPK | Würtemberger_2020 | irrelevant | 0 | 0 | This in-vitro study tests other compounds and reports no pharmacokinetic parameters for hyaluronic acid. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | This human filler-outcomes study reports no pharmacokinetic disposition parameters for hyaluronic acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhyaluronic_acid%5D&body=Drug%3A%20hyaluronic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_hyaluronic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:08 UTC</sub>
