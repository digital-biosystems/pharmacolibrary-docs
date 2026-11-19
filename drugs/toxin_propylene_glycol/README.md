<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Propylene glycol&quot;}]"></div>

# Propylene glycol

- **generic name:** Propylene glycol
- **T3DB:** [T3D4778](http://www.t3db.ca/toxins/T3D4778) · **DrugBank:** [DB01839](https://go.drugbank.com/drugs/DB01839) · **PubChem:** [CID 1030](https://pubchem.ncbi.nlm.nih.gov/compound/1030)
- **groups:** approved, investigational

## About

Propylene glycol (1,2-propanediol) is an organic compound (a diol alcohol), usually a tasteless, odorless, and colorless clear oily liquid that is hygroscopic and miscible with water, acetone, and chloroform. It is manufactured by the hydration of propylene oxide. Propylene glycol is used as a solvent for intravenous, oral, and topical pharmaceutical preparations It is generally considered safe. …

- **Category:** Household Toxin, Industrial/Workplace Toxin, Food Toxin, Synthetic Toxin
- **Sources and uses:** Propylene glycol is used as a solvent for intravenous, oral, and topical pharmaceutical preparations It is generally considered safe. Intravenous lorazepam contains the largest amount of propylene glycol of commonly used drugs. …
- **Detected in:** blood, cerebrospinal fluid, saliva, urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4778">T3DB T3D4778</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 57-55-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16997">ChEBI 16997</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| propylene_glycol (Propylene glycol) | metabolite | 76.095 | C3H8O2 | PubChem | [1030](https://pubchem.ncbi.nlm.nih.gov/compound/1030) | De_2025, Olafuyi_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Olafuyi_2025_reference](drugs/toxin_propylene_glycol/PropyleneGlycol_Olafuyi2025_reference.md) | held back | 1-compartment, IV | 4 | Olafuyi O et al., Exploring the Impact of Developmental C…, Journal of clinical pharmac… (2025) | [10.1002/jcph.6150](https://doi.org/10.1002/jcph.6150) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [De_2013_reference](drugs/toxin_propylene_glycol/PropyleneGlycol_De2013_reference.md) | — | 1-compartment (no model) | 0 | De Cock RF et al., Developmental pharmacokinetics of propy…, British journal of clinical… (2013) | [10.1111/j.1365-2125.2012.04312.x](https://doi.org/10.1111/j.1365-2125.2012.04312.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [De_2014_reference](drugs/toxin_propylene_glycol/PropyleneGlycol_De2014_reference.md) | — | 1-compartment (no model) | 0 | De Cock RF et al., Low but inducible contribution of renal…, Therapeutic drug monitoring (2014) | [10.1097/ftd.0000000000000003](https://doi.org/10.1097/ftd.0000000000000003) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [De_2025_reference](drugs/toxin_propylene_glycol/PropyleneGlycol_De2025_reference.md) | — | retention function (no model) | 2 | De Luca HP et al., In vitro and in vivo evaluation of prop…, Environmental toxicology an… (2025) | [10.1016/j.etap.2025.104795](https://doi.org/10.1016/j.etap.2025.104795) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ganetsky_2013_acetaminophen_toxicity_liver_injury](drugs/toxin_propylene_glycol/pd_Ganetsky_2013_acetaminophen_toxicity_liver_injury.md) | acetaminophen toxicity/liver injury ← propylene_glycol · inhibition effect | — | Ganetsky M et al., Effect of excipients on acetaminophen m…, Journal of clinical pharmac… (2013) | [10.1002/jcph.24](https://doi.org/10.1002/jcph.24) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 20:27 | 40:49 | 1/3/0 | 0/1/0 | 0/0/0 | 976,340/62,369 | einfracz / qwen3.8-flash-next | 28 | 7/16 | 28/0 | 0 |

## Coverage

- **PubMed hits:** 219 matched, 164 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2025.pdf` | De Luca HP et al., In vitro and in vivo evaluation of prop…, Environmental toxicology an… (2025) | popPK | 10 | [10.1016/j.etap.2025.104795](https://doi.org/10.1016/j.etap.2025.104795) | [40829725](https://pubmed.ncbi.nlm.nih.gov/40829725) | The paper reports quantitative kinetic parameters (absorption rate, half-lives, enzyme kinetic parameters) for propylene glycol ether metabolites in humans. |
| `De_2013.pdf` | De Cock RF et al., Developmental pharmacokinetics of propy…, British journal of clinical… (2013) | popPK | 9 | [10.1111/j.1365-2125.2012.04312.x](https://doi.org/10.1111/j.1365-2125.2012.04312.x) | [22536830](https://pubmed.ncbi.nlm.nih.gov/22536830) | The paper provides quantitative population PK parameters (clearance and volume of distribution formulas) for propylene glycol in human neonates directly in the text. |
| `De_2014.pdf` | De Cock RF et al., Low but inducible contribution of renal…, Therapeutic drug monitoring (2014) | popPK | 9 | [10.1097/ftd.0000000000000003](https://doi.org/10.1097/ftd.0000000000000003) | [24305628](https://pubmed.ncbi.nlm.nih.gov/24305628) | The paper reports a PBPK model for propylene glycol in neonates, but the specific numeric values for the kinetic parameters (clearances, volume of distribution) are not present in the provided abstract text, likely residing in the full results tables or supplementary material. |
| `Hopf_2012.pdf` | Hopf NB et al., Effect of age on toxicokinetics among h…, Toxicology letters (2012) | popPK | 9 | [10.1016/j.toxlet.2012.02.018](https://doi.org/10.1016/j.toxlet.2012.02.018) | [22421272](https://pubmed.ncbi.nlm.nih.gov/22421272) | The paper describes a controlled human toxicokinetic study with a compartmental model for PGME, but the specific numeric kinetic parameters are not included in the provided abstract/evidence. |
| `Cornford_1982.pdf` | Cornford EM, Correlation between lipid partition coe…, The Journal of membrane bio… (1982) | popPK | 8 | [10.1007/BF01870888](https://doi.org/10.1007/BF01870888) | [7057454](https://pubmed.ncbi.nlm.nih.gov/7057454) | The paper reports transintegumental uptake rates (a form of absorption/permeability parameter) for propylene glycol in Schistosoma japonicum, but the specific numeric values are not included in the text provided. |
| `Poet_2016.pdf` | Poet T et al., Deriving Biomonitoring Equivalents for…, International journal of hy… (2016) | popPK | 8 | [10.1016/j.ijheh.2015.09.006](https://doi.org/10.1016/j.ijheh.2015.09.006) | [26475513](https://pubmed.ncbi.nlm.nih.gov/26475513) | The paper reports urinary mass excretion fractions (Fue), which are kinetic parameters, including a specific value (Fue = 0.004) for propylene glycol methyl ether (the mono-methyl ether of propylene glycol). |
| `Kulo_2012.pdf` | Kulo A et al., The propylene glycol research project t…, International journal of ph… (2012) | popPK | 5 | [10.1016/j.ijpharm.2012.05.014](https://doi.org/10.1016/j.ijpharm.2012.05.014) | [22641171](https://pubmed.ncbi.nlm.nih.gov/22641171) | The paper describes a study on propylene glycol pharmacokinetics in neonates, which is relevant, but no actual numeric kinetic parameters (half-lives, clearance, etc.) are present in the provided text. |

<sub>queue written 2026-11-15 20:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Addicks_1990 | irrelevant | 1 | 0 | The paper studies topical drug delivery where propylene glycol acts as a solvent/vehicle for aminobenzoates, with no kinetic parameters for propylene glycol itself. |
| popPK | Alcorn_1991 | irrelevant | 0 | 0 | Propylene glycol dipelargonate appears only as a comparison solvent for measuring partition coefficients of other substances (nitrobenzene, toluene, benzoic acid) in rat intestinal membranes, with no toxicokinetic parameters provided for propylene glycol itself. |
| popPK | Alvarez-Román_2004 | irrelevant | 0 | 0 | Propylene glycol is used solely as a control vehicle/comparator for nanoparticle delivery studies, not as the subject of kinetic measurement. |
| popPK | Anderson_1990 | irrelevant | 0 | 0 | The paper focuses on the physicochemical properties of carbovir, using propylene glycol only as a co-solvent, with no kinetic parameters reported for it. |
| popPK | Arellano_1998 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle/solvent component in the formulation, not as the subject substance; the study focuses on diclofenac absorption. |
| popPK | Asfour_2020 | irrelevant | 0 | 0 | Propylene glycol is merely a component of the drug delivery formulation vehicle, and no toxicokinetic parameters for propylene glycol itself are reported. |
| popPK | Bendas_1993 | irrelevant | 1 | 2 | The paper focuses on the in vitro penetration kinetics of betamethasone-17-valerate; propylene glycol is used merely as a vehicle/cosolvent to modulate drug transport, and the reported parameters (AUC, diffusivity, partition coefficient) describe the drug's movement, not propylene glycol's own toxicokinetics. |
| popPK | Berthet_2020 | irrelevant | 2 | 4 | The study focuses on propylene glycol ethers (PGME and PGBE), not propylene glycol itself, so the kinetic parameters do not apply to the requested substance. |
| popPK | Birudaraj_2005 | irrelevant | 0 | 0 | Propylene glycol is used solely as a permeation enhancer for buspirone, with no kinetic parameters for propylene glycol itself reported. |
| popPK | Borgatta_2021 | irrelevant | 0 | 0 | The paper discusses analytical stability and adsorption of propylene glycol ethers in storage vials, reporting no physiological toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for the human or animal body. |
| popPK | Borgatta_2022 | irrelevant | 0 | 0 | The paper studies propylene glycol ethers (PGME, PGBE), not propylene glycol itself. |
| popPK | Brucks_1989 | irrelevant | 0 | 0 | The paper studies ibuprofen penetration; propylene glycol is used only as a vehicle component and no toxicokinetic parameters for propylene glycol itself are reported. |
| popPK | Capková_2005 | irrelevant | 0 | 8 | The paper reports partition coefficients for a drug (XIX M) influenced by propylene glycol as an excipient, not kinetic parameters for propylene glycol itself. |
| popPK | Castronovo_1980 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle/formulation component, not the subject of kinetic measurement. |
| popPK | Celesti_1992 | irrelevant | 0 | 0 | Propylene glycol is merely a vehicle component for clonazepam, not the substance under kinetic study. |
| popPK | Chatterjee_1997 | irrelevant | 1 | 0 | Propylene glycol is used as a solvent/vehicle in the transdermal formulation, but no kinetic parameters are reported for propylene glycol itself, only for methotrexate and edatrexate. |
| popPK | Christia_2022 | irrelevant | 2 | 0 | The paper studies propylene glycol derivatives (DiPGDB) as plasticizers, not propylene glycol itself, and reports metabolite identification rather than quantitative toxicokinetic parameters. |
| popPK | Corley_2005 | irrelevant | 1 | 1 | The paper reports kinetic parameters for propylene glycol monomethyl ether (PM), not propylene glycol; propylene glycol is mentioned only as a metabolite without kinetic data. |
| popPK | Cornford_1982 | relevant | 8 | 0 | The paper reports transintegumental uptake rates (a form of absorption/permeability parameter) for propylene glycol in Schistosoma japonicum, but the specific numeric values are not included in the text provided. |
| popPK | Dahi_2022 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a vehicle/solvent descriptor (propylene glycol-free melphalan) and no kinetic parameters for propylene glycol are reported; the study focuses on melphalan pharmacokinetics. |
| popPK | Dawick_2025 | irrelevant | 0 | 0 | The paper reports toxicokinetic data for C12 alkyl benzoate (Finsolv TN), not propylene glycol. |
| popPK | De_2025_2 | irrelevant | 1 | 0 | The paper reports toxicokinetic parameters for propylene glycol ethers (PGEE and PGPE), not propylene glycol itself. |
| popPK | De_2025_3 | irrelevant | 0 | 0 | The paper reports toxicokinetics for propylene glycol ethers (PGEE and PGPE), not propylene glycol itself. |
| popPK | Dearden_2002 | irrelevant | 0 | 0 | The paper discusses propylene glycol dipelargonate (PGDP) as a solvent in log Kow modeling, not propylene glycol itself, and reports no toxicokinetic parameters. |
| popPK | Devanthéry_2000 | irrelevant | 0 | 0 | The paper discusses the metabolite PGME (a metabolite of propylene glycol *monomethyl ether*, not propylene glycol itself) in an occupational exposure context with no kinetic parameters. |
| popPK | Dewidar_2021 | irrelevant | 0 | 0 | The paper discusses biofiltration of propylene glycol monomethyl ether (PGME), not propylene glycol, and reports engineering reaction rates rather than biological toxicokinetic parameters. |
| popPK | Dill_2004 | irrelevant | 1 | 1 | The paper focuses on propylene glycol mono-t-butyl ether (PGMBE), a distinct chemical derivative, not propylene glycol itself, and contains no numerical kinetic parameters for propylene glycol. |
| popPK | El-Houssieny_2010 | irrelevant | 1 | 1 | Propylene glycol is used solely as a formulation excipient/permeation enhancer in a drug delivery study, with no toxicokinetic parameters reported. |
| popPK | Elsinga_1994 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle/solvent for the radioligand injection; no kinetic parameters are reported for propylene glycol itself. |
| popPK | Evenbratt_2013 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a comparator solvent in a phase behavior study, with no kinetic data provided. |
| popPK | Fang_2016 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a vehicle for topical application, not as the subject of kinetic modeling. |
| popPK | Ganetsky_2013 | irrelevant | 1 | 0 | Propylene glycol is described only as an excipient/vehicle in an acetaminophen study; no kinetic parameters for propylene glycol itself are reported. |
| popPK | Gardavská_1994 | irrelevant | 0 | 0 | Propylene glycol is used merely as an auxiliary substance/excipient to modify the partition coefficients of other drugs (phenylcarbamic acid derivatives), not as the subject of kinetic investigation. |
| popPK | Harada_2011 | irrelevant | 1 | 0 | Propylene glycol is used merely as a solvent vehicle for a vitamin D3 derivative; the paper reports kinetic parameters for the derivative (OCT), not for propylene glycol itself. |
| popPK | Hassan_1998 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a solvent component for the free busulfan formulation, with no kinetic parameters reported for it; all data pertain to busulfan. |
| popPK | Herkenne_2007 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle component in a formulation to study ibuprofen's dermatopharmacokinetics, not as the subject substance. |
| popPK | Hopf_2012 | relevant | 9 | 2 | The paper describes a controlled human toxicokinetic study with a compartmental model for PGME, but the specific numeric kinetic parameters are not included in the provided abstract/evidence. |
| popPK | Hopf_2024 | irrelevant | 0 | 0 | The paper is a study protocol describing a plan to assess neurotoxicity, not a results paper reporting quantitative kinetic parameters for propylene glycol or its ethers. |
| popPK | Hopf_2026 | irrelevant | 1 | 0 | The paper is a regulatory gap analysis and inventory study with no quantitative toxicokinetic parameters for propylene glycol itself. |
| popPK | Hopf_2026_2 | relevant | 4 | 3 | The paper reports elimination half-lives for propylene glycol ethers (PGBE, PGME), not propylene glycol itself, though PGME is a metabolite of propylene glycol ethers, the subject substance in the prompt is strictly propylene glycol which is distinct from these ethers; however, strictly speaking, PGME is often considered related but the prompt asks for "propylene_glycol" specifically, and these are different chemical entities (ethers vs alcohol). Even if considered metabolites, the half-lives provided are rough estimates (~6h, ~4h) rather than precise fitted parameters for propylene glycol itself. |
| popPK | Hopf_2026_3 | irrelevant | 2 | 1 | The paper focuses on propylene glycol ethers (PGBE, PGME) and their metabolites (2-BPA, 2-MPA), not propylene glycol itself; propylene glycol is only mentioned in the context of the chemical family name or as part of the parent ether structure, with no kinetic parameters for propylene glycol. |
| popPK | Hu_2021_2 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle control for the NNK study, and no kinetic parameters for propylene glycol are reported. |
| popPK | Iliopoulos_2019 | irrelevant | 0 | 0 | Propylene glycol is used solely as a solvent/vehicle for the permeation of a different substance (3-O-ethyl-l-ascorbic acid), and no kinetic parameters for propylene glycol itself are reported. |
| popPK | Insumrong_2025 | irrelevant | 0 | 0 | Propylene glycol is used merely as a vehicle/solvent for extracting other compounds from teak leaves, and the paper reports no kinetic parameters for propylene glycol itself. |
| popPK | Ivanova_2001 | irrelevant | 0 | 0 | The paper discusses propylene glycol solely as a cosolvent in a physical chemistry study of polymer microstructure, with no toxicokinetic data. |
| popPK | Ivanova_2002 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study investigating the effect of propylene glycol on the physical stability of Poloxamer gels, containing no toxicokinetic parameters. |
| popPK | Ivaturi_2009 | irrelevant | 0 | 0 | Propylene glycol acts solely as a formulation excipient (dielectric constant reducing agent) to enhance methotrexate permeation; no kinetic parameters for propylene glycol are reported. |
| PGx | Iwase_2006 | not_relevant | 0 | 0 | The study investigates the effect of propylene glycol as an organic solvent on CYP3A enzyme activity in vitro, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of propylene glycol. |
| popPK | Jablonka_2019 | irrelevant | 2 | 0 | Propylene glycol is mentioned only as a solvent component in the drug formulation Foscan; no kinetic parameters for propylene glycol itself are reported. |
| popPK | Jain_2007 | irrelevant | 0 | 0 | Propylene glycol is used solely as a comparator solubility enhancer, with no toxicokinetic parameters reported for it. |
| popPK | Jaiswal_1999 | irrelevant | 1 | 0 | The paper focuses on the permeation of naloxone; propylene glycol is used merely as a vehicle/promoter to enhance skin permeability, not as the subject of toxicokinetic parameter extraction. |
| popPK | Jerabek_1986 | irrelevant | 0 | 0 | The paper concerns 18F-labeled fluoronitroimidazoles and does not mention propylene glycol or report any toxicokinetic parameters for it. |
| popPK | Jia_2025 | irrelevant | 0 | 0 | The paper describes propylene glycol (1,2-propanediol) solely as a co-solvent/excipient for an antibiotic formulation and reports no kinetic parameters for it. |
| PGx | Jin_2025 | not_relevant | 0 | 0 | The study focuses on acrolein (a degradation product), not propylene glycol, and examines TRPA1-mediated toxicity/respiratory effects rather than PK/PD parameters. |
| popPK | Karadzovska_2013 | irrelevant | 0 | 0 | Propylene glycol is used merely as a solvent/vehicle for other test substances, with no kinetic parameters reported for propylene glycol itself. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | Propylene glycol is used only as a permeation enhancer/vehicle in a formulation study for finasteride; no kinetic parameters for PG are reported. |
| popPK | Kirman_2005 | irrelevant | 2 | 0 | The paper focuses on the metabolite propylene glycol methyl ether (PGME) and its acetate, not propylene glycol itself. |
| popPK | Kulo_2012 | relevant | 5 | 0 | The paper describes a study on propylene glycol pharmacokinetics in neonates, which is relevant, but no actual numeric kinetic parameters (half-lives, clearance, etc.) are present in the provided text. |
| popPK | Laitinen_1995 | irrelevant | 1 | 0 | The paper is an occupational epidemiology study comparing urinary excretion levels (a concentration/outcome measure) in exposed vs. unexposed humans, but it does not report any derived toxicokinetic parameters such as half-lives, rate constants, clearance, or partition coefficients for propylene glycol. |
| popPK | Landmesser_2020 | irrelevant | 1 | 0 | Propylene glycol is used solely as a labeled precursor/vehicle in a smoking study to track formaldehyde metabolites, with no kinetic parameters for propylene glycol itself. |
| popPK | Lee_2005 | irrelevant | 0 | 0 | Propylene glycol is used only as a formulation vehicle/excipient for the drug ceftriaxone, with no kinetic parameters reported for propylene glycol itself. |
| popPK | Li_1996 | irrelevant | 0 | 0 | Propylene glycol is used only as a vehicle/co-solvent for the substance of interest, apigenin, and no kinetic parameters for propylene glycol are reported. |
| popPK | Li_1999 | irrelevant | 0 | 0 | Propylene glycol is used solely as a cosmetic cosolvent/surfactant in a pharmaceutical formulation study, with no toxicokinetic data reported. |
| popPK | Lin_1995 | irrelevant | 0 | 0 | The provided text contains only Grobid software metadata and no scientific content or data regarding propylene glycol. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper reports kinetic and physical parameters for propylene glycol monocaprylate (PGM) as a formulation enhancer, not for propylene glycol itself. |
| popPK | Magnusson_2004 | irrelevant | 2 | 0 | The paper focuses on a general quantitative structure-activity relationship for solute flux across skin, citing propylene glycol only as a vehicle type in a validation dataset, with no specific kinetic parameters reported for propylene glycol itself. |
| popPK | Mahjub_2015 | irrelevant | 0 | 0 | Propylene glycol is used solely as an excipient/vehicle in a drug delivery formulation, with no toxicokinetic parameters reported. |
| popPK | Mbah_2005 | irrelevant | 0 | 0 | Propylene glycol is used solely as a solvent for solubility testing of another drug (valsartan), with no toxicokinetic parameters reported. |
| popPK | Mbah_2007 | irrelevant | 1 | 0 | Propylene glycol is studied solely as a vehicle/co-solvent to influence the partition coefficient of the target substance (oxybenzone), not as the subject of toxicokinetic investigation. |
| popPK | McCain_1997 | irrelevant | 0 | 0 | Propylene glycol appears only as the vehicle for the toxicants; the paper reports LD50s of the active substances, not kinetic parameters for propylene glycol. |
| popPK | McDaid_1996 | irrelevant | 0 | 0 | The paper focuses on nifedipine transdermal delivery, and propylene glycol is used merely as a penetration enhancer/comparator, not as the subject of toxicokinetic parameter measurement. |
| popPK | McKarns_1997 | irrelevant | 0 | 0 | The paper discusses QSARs for short-chain aliphatic alcohols (methanol to octanol) regarding membrane integrity, does not mention propylene glycol as a subject, and reports no toxicokinetic parameters. |
| popPK | Millard_2002 | irrelevant | 0 | 0 | Propylene glycol is used as a pharmaceutical cosolvent in a solubility model, with no toxicokinetic parameters reported for its disposition. |
| popPK | Miyazaki_2026 | irrelevant | 0 | 0 | The paper is a case report on nicotine poisoning; propylene glycol is mentioned only as the solvent in the e-liquid bottle and no kinetic parameters for propylene glycol are reported. |
| popPK | More_2020 | irrelevant | 0 | 0 | The paper is a PBPK modeling study of ethanol, not propylene glycol; propylene glycol is only mentioned as a solvent/vehicle in e-liquids, not as the kinetic subject. |
| popPK | Mura_1992 | irrelevant | 0 | 0 | The paper investigates clonazepam release kinetics, with propylene glycol serving only as a vehicle ingredient in the formulation, not as the subject of toxicokinetic analysis. |
| popPK | Mura_2000 | irrelevant | 0 | 0 | Propylene glycol is used solely as a formulation vehicle/enhancer for the permeation of clonazepam, which is the kinetic subject; no kinetic parameters for propylene glycol itself are reported. |
| popPK | Niven_2011 | irrelevant | 2 | 0 | The paper reports toxicokinetic parameters for cyclosporine, while propylene glycol serves only as the solvent/vehicle in the formulation, not the subject substance. |
| PGx | Orzechowski_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomic effects of ABCB1 mutations on ivermectin, not propylene glycol; propylene glycol is mentioned only as a vehicle component. |
| popPK | Patel_1988 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a vehicle/solvent component for isoproterenol, with no kinetic parameters reported for propylene glycol itself. |
| popPK | Phan_2020 | irrelevant | 0 | 0 | Propylene glycol is only mentioned as an excipient component in the SEDDS formulation, with no toxicokinetic parameters measured for it. |
| popPK | Poet_2016 | relevant | 8 | 4 | The paper reports urinary mass excretion fractions (Fue), which are kinetic parameters, including a specific value (Fue = 0.004) for propylene glycol methyl ether (the mono-methyl ether of propylene glycol). |
| popPK | Polin_1989 | irrelevant | 0 | 0 | Propylene glycol is used solely as a treatment agent to enhance PCB elimination, and no kinetic parameters for propylene glycol itself are reported. |
| popPK | Procházka_2002 | irrelevant | 0 | 0 | Propylene glycol is used only as a formulation excipient, and the reported parameters (partition coefficient, viscosity) belong to a different substance (a local anesthetic). |
| popPK | Qin_2025 | irrelevant | 0 | 0 | Propylene glycol is used solely as a chemical penetration enhancer for felbinac, and no toxicokinetic parameters for propylene glycol are reported. |
| popPK | Rafiee-Tehrani_2000 | irrelevant | 1 | 0 | The paper focuses on the release of the drug piroxicam, with propylene glycol used merely as a formulation additive/comparator, not as the subject of toxicokinetic study. |
| popPK | Rajasenan_1995 | irrelevant | 0 | 0 | The paper focuses on cytochrome P450 antigens and immunology; propylene glycol is mentioned only as a component of the vehicle for administering other drugs, with no kinetic data. |
| popPK | Ran_2001 | irrelevant | 0 | 0 | The paper is a pharmaceutical solubility study where propylene glycol acts solely as a co-solvent for cyclosporin A; no toxicokinetic parameters for propylene glycol are reported. |
| popPK | Reale_2023 | irrelevant | 1 | 1 | The paper focuses on propylene glycol methyl ether (PGME), not propylene glycol; propylene glycol is only mentioned as a metabolic pathway intermediate without specific kinetic parameters reported for it. |
| popPK | Rojas_2004 | irrelevant | 0 | 0 | The paper concerns bacterial biotransformation and solvent tolerance in Pseudomonas putida and does not mention propylene glycol or provide toxicokinetic parameters for it. |
| popPK | Roy_1994 | irrelevant | 1 | 1 | Propylene glycol is used solely as a vehicle component for buprenorphine permeation, with no kinetic parameters reported for propylene glycol itself. |
| popPK | Rupérez_2024 | irrelevant | 0 | 0 | The paper is an analytical chemistry study focusing on the synthesis and identification of oligoesters in food packaging; propylene glycol is only mentioned as a chemical monomer constituent, with no toxicokinetic data or parameters reported. |
| popPK | Sato_1998 | irrelevant | 0 | 0 | The evidence contains only metadata from GROBID extraction software and no scientific content regarding propylene glycol. |
| popPK | Schober_2017 | irrelevant | 1 | 1 | Propylene glycol is mentioned only as an indoor air pollutant concentration, with no kinetic parameters, models, or metabolic data reported. |
| popPK | Schubert_2011 | irrelevant | 0 | 0 | The paper focuses on exposure metrics and biomarkers in smoke analysis, not toxicokinetic parameters of propylene glycol. |
| popPK | Schultz_2004 | irrelevant | 0 | 0 | The paper focuses on quantitative structure-activity relationships (QSAR) for toxicity potency (IGC50) in Tetrahymena and does not report toxicokinetic parameters for propylene glycol. |
| popPK | Sethi_2022 | irrelevant | 0 | 0 | Propylene glycol is used only as an excipient/vehicle in a formulation study of atazanavir; no kinetic parameters for propylene glycol are reported. |
| popPK | Shetty_2013 | irrelevant | 0 | 0 | Propylene glycol is used as a chemical enhancer/vehicle for lercanidipine delivery, not as the subject of kinetic analysis. |
| popPK | Sim_2025 | irrelevant | 0 | 0 | Propylene glycol is used solely as a solvent/vehicle for the mitragynine permeation study, and no kinetic parameters for propylene glycol itself are reported. |
| popPK | Slaughter_2014 | irrelevant | 0 | 0 | Propylene glycol is mentioned only as a metabolite of isopropanol, with no quantitative kinetic parameters provided for propylene glycol itself. |
| PGx | Sun_2007 | not_relevant | 0 | 0 | The paper discusses the metabolism of indoline by cytochrome P450 enzymes and does not mention propylene glycol, nor does it report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Tabboon_2022 | irrelevant | 1 | 10 | The paper investigates the mucosal permeation of cannabidiol (CBD), with propylene glycol (PG) serving only as a vehicle/solvent; the kinetic parameters (permeability, flux) belong to CBD, not PG. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper focuses on the physicochemical characterization of piroctone olamine, with propylene glycol appearing only as a solvent/excipient for solubility tests, with no toxicokinetic parameters reported for it. |
| popPK | Tenjarla_1996 | irrelevant | 0 | 0 | Propylene glycol is used only as a solvent for drug solubility measurements, with no toxicokinetic parameters reported for it. |
| popPK | Tenjarla_1999 | irrelevant | 0 | 0 | Propylene glycol is used solely as a vehicle/solvent for the drugs, not as the subject substance for toxicokinetic modeling. |
| popPK | Thomas_2003 | irrelevant | 0 | 0 | Propylene glycol is used solely as a solvent/vehicle for the study of Zidovudine permeation, with no kinetic parameters reported for propylene glycol itself. |
| PGx | Thomsen_1995 | not_relevant | 0 | 0 | The paper describes propylene glycol as a drug inhibiting CYP enzymes, not a gene variant affecting PG's PK/PD. |
| popPK | Tuntiyasawasdikul_2014 | irrelevant | 0 | 0 | Propylene glycol is used solely as a solvent/vehicle to facilitate the permeation of Kaempferia parviflora methoxyflavones, not as the subject of kinetic study. |
| popPK | Viegas_2001 | irrelevant | 0 | 0 | Propylene glycol is used as an excipient/vehicle in creams to deliver a different drug (peldesine/BCX-34), with no kinetic parameters reported for propylene glycol itself. |
| popPK | Virklund_2024 | irrelevant | 0 | 0 | The paper is about p-coumaric acid biocatalysis where poly(ethylene glycol-ran-propylene glycol) is used merely as a chemical in an aqueous two-phase system, not as a toxicokinetic subject. |
| popPK | Vitková_1995 | irrelevant | 0 | 0 | The paper studies propylene glycol as a formulation excipient (vehicle) affecting the kinetics of a different drug, not the kinetics of propylene glycol itself. |
| popPK | Vitková_1996 | irrelevant | 0 | 0 | Propylene glycol is used solely as a formulation excipient to measure effects on another drug's physical properties, not as the subject of toxicokinetic parameter estimation. |
| popPK | Vitková_2004 | irrelevant | 0 | 0 | The paper focuses on physicochemical properties of a drug formulation where propylene glycol is used merely as a humectant excipient, with no toxicokinetic parameters reported. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for cyclosporine, while propylene glycol is used only as a vehicle/formulation component with no kinetic data reported. |
| popPK | Werner_2024 | relevant | 6 | 4 | The paper reports in vitro hepatic intrinsic clearance parameters (Vmax, Km, CLint) for propylene glycol methyl ether (PGME), a derivative related to propylene glycol, but specific numeric values are largely in tables/figures not fully detailed in the text extract, and the substance is PGME rather than pure propylene glycol. |
| popPK | Werner_2025 | irrelevant | 4 | 8 | The paper focuses on propylene glycol ETHERS and their metabolites, not propylene glycol itself, as indicated by the title and abstract text. |
| PGx | Yan_2015 | not_relevant | 0 | 0 | The paper concerns Tanshinone IIA, not propylene glycol, and reports formulation design/pharmacokinetics without any genetic/pharmacogenomic analysis. |
| popPK | Yang_2012 | irrelevant | 1 | 0 | Propylene glycol is merely a component of the liposomal formulation for icariin, and all reported pharmacokinetic parameters refer to icariin, not propylene glycol. |
| popPK | Younes_2018 | irrelevant | 1 | 1 | This is a regulatory review (EFSA opinion) that repeats existing data rather than reporting new quantitative kinetic parameters; the only numeric kinetic mention ("mean half-life of 2 h") is fragmented in the evidence without full context or species specificity, and the paper primarily discusses food additive exposure levels and ADI. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | Propylene glycol appears only as a vehicle/solvent for phenylethyl resorcinol, with no kinetic parameters reported for propylene glycol itself. |
| popPK | Zhang_2021 | irrelevant | 2 | 0 | Propylene glycol is treated merely as a component in an e-liquid mixture for in vitro toxicity risk assessment, not as the subject of specific toxicokinetic parameter determination; no quantitative kinetic parameters for PG are reported in the text. |
| popPK | Zhang_2025 | irrelevant | 1 | 0 | Propylene glycol is used as a chemical penetration enhancer in a vehicle/formulation for caffeine, not as the subject of kinetic parameter extraction. |
| popPK | Zhao_2000 | irrelevant | 1 | 0 | Propylene glycol is used merely as a vehicle/excipient, and all quantitative kinetic parameters reported (permeability, diffusion coefficient, partition coefficient) belong to tamoxifen. |
| popPK | Zuk_1996 | irrelevant | 0 | 0 | Propylene glycol appears only as a component of the Cremophor EL delivery vehicle, while the kinetic parameters reported are for the photosensitizer isoBOSINC. |
| popPK | Ćetković_2018 | irrelevant | 0 | 0 | Propylene glycol derivatives appear only as formulation excipients (surfactants/co-surfactants) for a simvastatin drug delivery system, not as the subject of toxicokinetic investigation. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropylene_glycol%5D&body=Drug%3A%20propylene_glycol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_propylene_glycol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 20:09 UTC</sub>
