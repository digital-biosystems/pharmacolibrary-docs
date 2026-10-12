<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;tetracaine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tetracaine_Sam2009_reference&quot;,&quot;label&quot;:&quot;Sam_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/Tetracaine_Sam2009_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tetracaine_Gapiska2025_reference&quot;,&quot;label&quot;:&quot;Gapi\u0144ska_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tetracaine/Tetracaine_Gapiska2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tetracaine

- **generic name:** tetracaine
- **ATC codes:** `C05AD02`, `D04AB06`, `N01BA03`, `S01HA03`
- **DrugBank:** [DB09085](https://go.drugbank.com/drugs/DB09085) · **PubChem:** [CID 5411](https://pubchem.ncbi.nlm.nih.gov/compound/5411)
- **molar mass:** 264.369 g/mol (C15H24N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Tetracaine is a local anesthetic used to prevent or relieve pain, including topical use on skin, eye, and hemorrhoids or anal fissures. It is widely used and appears on the WHO list of essential medicines, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419608](https://www.wikidata.org/wiki/Q419608) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| para-butylaminobenzoic acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:29 | 20:49 | 1/1/1 | 4/0/0 | 0/0/0 | 274,059/35,459 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 3/6 | 13/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | [Sam_2009_reference](drugs/drug_tetracaine/Tetracaine_Sam2009_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Sam WJ et al., Population pharmacokinetics of remifent…, BMC anesthesiology (2009) | [10.1186/1471-2253-9-5](https://doi.org/10.1186/1471-2253-9-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769), gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: unreported model parameter default(s): ka, k21</sub><br><sub>route_to: `scholar`</sub> | [Gapińska_2025_reference](drugs/drug_tetracaine/Tetracaine_Gapiska2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 3 | Gapińska N et al., Effect of SSR504734, a Selective Glycin…, ACS chemical neuroscience (2025) | [10.1021/acschemneuro.5c00039](https://doi.org/10.1021/acschemneuro.5c00039) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Cacek_2017_reference](drugs/drug_tetracaine/Tetracaine_Cacek2017_reference.md) | — | parent + metabolite (no model) | 0 | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Csernoch_1999_Rrel_peak](drugs/drug_tetracaine/pd_Csernoch_1999_Rrel_peak.md) | rate of calcium release (Rrel) from the sarcoplasmic reticulum (SR) - early peak ← tetracaine · direct sigmoid Emax (Hill) effect | — | Csernoch L et al., Effects of tetracaine on sarcoplasmic c…, The Journal of physiology 5… (1999) | [10.1111/j.1469-7793.1999.843ab.x](https://doi.org/10.1111/j.1469-7793.1999.843ab.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Csernoch_1999_Rrel_steady](drugs/drug_tetracaine/pd_Csernoch_1999_Rrel_steady.md) | rate of calcium release (Rrel) from the sarcoplasmic reticulum (SR) - steady level ← tetracaine · direct sigmoid Emax (Hill) effect | — | Csernoch L et al., Effects of tetracaine on sarcoplasmic c…, The Journal of physiology 5… (1999) | [10.1111/j.1469-7793.1999.843ab.x](https://doi.org/10.1111/j.1469-7793.1999.843ab.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Csernoch_1999_open_probability](drugs/drug_tetracaine/pd_Csernoch_1999_open_probability.md) | open probability of the ryanodine receptor (RyR) calcium release channel ← tetracaine · direct sigmoid Emax (Hill) effect | — | Csernoch L et al., Effects of tetracaine on sarcoplasmic c…, The Journal of physiology 5… (1999) | [10.1111/j.1469-7793.1999.843ab.x](https://doi.org/10.1111/j.1469-7793.1999.843ab.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Langerman_1994_TF](drugs/drug_tetracaine/pd_Langerman_1994_TF.md) | analgetic effect ← tetracaine · direct sigmoid Emax (Hill) effect | — | Langerman L et al., The partition coefficient as a predicto…, Anesthesia and analgesia (1994) | [10.1213/00000539-199409000-00015](https://doi.org/10.1213/00000539-199409000-00015) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Tay_2019_fluorescence_response](drugs/drug_tetracaine/pd_Tay_2019_fluorescence_response.md) | fluorescence response ← tetracaine · direct sigmoid Emax (Hill) effect | — | Tay B et al., Development of a high-throughput fluore…, PloS one (2019) | [10.1371/journal.pone.0213751](https://doi.org/10.1371/journal.pone.0213751) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_1994_Na_channel_block](drugs/drug_tetracaine/pd_Wang_1994_Na_channel_block.md) | Na+ channel block ← tetracaine · direct sigmoid Emax (Hill) effect | — | Wang GK et al., Charged tetracaine as an inactivation e…, Biophysical journal (1994) | [10.1016/S0006-3495(94)80666-6](https://doi.org/10.1016/S0006-3495(94)80666-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_1994_steady_state_inactivation](drugs/drug_tetracaine/pd_Wang_1994_steady_state_inactivation.md) | steady-state inactivation ← tetracaine · direct sigmoid Emax (Hill) effect | — | Wang GK et al., Charged tetracaine as an inactivation e…, Biophysical journal (1994) | [10.1016/S0006-3495(94)80666-6](https://doi.org/10.1016/S0006-3495(94)80666-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tetracaine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RYR1 (modulator), RYR2 (modulator), SCN10A (inhibitor), SCN1A (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 148 matched, 65 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cacek_2017.pdf` | Cacek AT et al., Population Pharmacokinetics of an Intra…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.799](https://doi.org/10.1002/jcph.799) | [27436060](https://pubmed.ncbi.nlm.nih.gov/27436060) | The study reports quantitative population PK parameters (ka, CL, V, Q) for tetracaine's primary metabolite PBBA, which is explicitly defined as relevant to tetracaine's pharmacokinetics in the instructions. |

<sub>queue written 2026-10-06T23:18:31.507796+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bolger_1987 | irrelevant | 0 | 0 | The study is an in-vitro binding assay using tetracaine as a probe to characterize calcium antagonist sites, not a pharmacokinetic study. |
| popPK | Campbell_2007 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation in opossum esophagus where tetracaine is used as a ryanodine receptor antagonist, not as the subject drug for pharmacokinetic analysis. |
| popPK | Cartabuke_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxymetazoline, not tetracaine. |
| popPK | Csernoch_1999 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of tetracaine on calcium release in muscle fibers (in vitro/physiological), not its pharmacokinetic disposition parameters. |
| popPK | Del_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of opticin in rabbits, and tetracaine is only mentioned as a topical anesthetic used for procedural anesthesia, not as the subject drug. |
| popPK | Drexler_2025 | irrelevant | 0 | 0 | The paper investigates the role of serotonergic neurons in glioma growth and does not mention tetracaine or report any pharmacokinetic parameters for it. |
| popPK | Fernandes_2004 | irrelevant | 0 | 0 | Tetracaine is used only as a pharmacological tool to inhibit dopamine release in an in-vitro study, with no pharmacokinetic parameters reported. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SSR504734 in mice, and tetracaine is only mentioned as an ocular anesthetic used for procedural purposes, not as the subject drug. |
| popPK | Grant_1994 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment using rabbit corneal cells and reports no pharmacokinetic parameters. |
| popPK | Katsuki_2004 | irrelevant | 0 | 0 | The study is an in-vitro hemolysis assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper investigates the partitioning of small molecules in biomolecular condensates and does not mention tetracaine or report any pharmacokinetic parameters for it. |
| popPK | Langerman_1994 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency (EC50/ED50) and partition coefficients, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Moore_2025 | not_relevant | 0 | 0 | The paper investigates the structure-activity relationship of tetracaine derivatives for treating CPVT, not the effect of a specific gene variant on the PK/PD of tetracaine itself. |
| popPK | Mourot_2006 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on nicotinic acetylcholine receptors where tetracaine is used only as a noncompetitive blocker, not as the subject of pharmacokinetic analysis. |
| PD | Mourot_2006 | not_relevant | 0 | 0 | The paper focuses on the photochemical tethering of an agonist (AC5) to nAChRs; tetracaine is only mentioned as a noncompetitive blocker used to confirm the mechanism of action, with no exposure-response or dose-response analysis or numeric PD parameters reported for it. |
| popPK | Negishi_1982 | irrelevant | 0 | 0 | The study investigates calcium uptake kinetics in mastocytoma cells and uses tetracaine only as a negative control inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Nieoczym_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-gingerol in mice, and tetracaine is only mentioned as a topical anesthetic used for corneal anesthesia during electroshock tests. |
| popPK | Ohnishi_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium permeability in sarcoplasmic reticulum, not a pharmacokinetic study reporting disposition parameters for tetracaine. |
| popPK | Reiser_1983 | irrelevant | 0 | 0 | The study investigates ion channel pharmacology in rat brain cells using tetracaine as a blocking agent, not its pharmacokinetics. |
| popPK | Sam_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remifentanil, while tetracaine is only mentioned as a co-administered spinal anesthetic agent. |
| popPK | Scheib_2006 | irrelevant | 0 | 0 | The study is a molecular modeling and docking analysis of tetracaine binding to sodium channels, not a pharmacokinetic study reporting disposition parameters. |
| PD | Scheib_2006 | not_relevant | 0 | 0 | The provided text only contains the chemical structure and molecular weight of Tetrodotoxin, with no mention of tetracaine or any pharmacodynamic data. |
| popPK | Schlieper_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of local anesthetic effects on membranes and cardiac tissues, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Schnetkamp_1989 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ion flux in bovine retinal cells where tetracaine is used only as a pharmacological blocker, not as the subject of pharmacokinetic analysis. |
| popPK | Schnetkamp_1990 | irrelevant | 0 | 0 | The study investigates cation selectivity of a channel in bovine rod membranes using tetracaine as a pharmacological blocker, not as a subject drug for pharmacokinetic analysis. |
| PD | Schnetkamp_1990 | not_relevant | 1 | 0 | The paper mentions tetracaine only as a qualitative blocker of a channel component without providing any numeric concentration-effect data, IC50, or dose-response parameters. |
| popPK | Sárközi_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tetracaine's effects on excitation-contraction coupling in frog muscle, not a pharmacokinetic study. |
| popPK | Tay_2019 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology/fluorescence assay development study where tetracaine is used only as a reference inhibitor to validate the assay, not as a subject for pharmacokinetic analysis. |
| popPK | Tiger_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring local anesthetic potency (IC50) on sodium channels, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Tovey_1998 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of calcium release where tetracaine is used only as a blocking agent, not as the subject of pharmacokinetic analysis. |
| popPK | Wang_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of tetracaine's mechanism of action on sodium channels, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Wang_2000 | irrelevant | 0 | 0 | The study investigates the vasoactive effects of nicotine in rat tail arteries, using tetracaine only as a non-specific blocker of the rebound contraction, with no pharmacokinetic parameters reported for tetracaine. |
| popPK | Wissing_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium signaling in hepatocytes where tetracaine is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Wissing_2002 | not_relevant | 0 | 0 | The paper reports that tetracaine did not affect the Ca2+ release response, providing no numeric PD parameters or exposure-response relationship for tetracaine. |
| popPK | de_2020 | irrelevant | 0 | 0 | The study investigates renal development in preterm rabbits and mentions tetracaine only as a component of the euthanasia solution, not as a subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:18 UTC</sub>
