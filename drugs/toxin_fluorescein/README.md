<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fluorescein&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluorescein_Srinivas2018_reference&quot;,&quot;label&quot;:&quot;Srinivas_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorescein/Fluorescein_Srinivas2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluorescein_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fluorescein/Fluorescein_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Fluorescein

- **generic name:** Fluorescein
- **T3DB:** [T3D4808](http://www.t3db.ca/toxins/T3D4808) · **DrugBank:** [DB00693](https://go.drugbank.com/drugs/DB00693) · **PubChem:** [CID 16850](https://pubchem.ncbi.nlm.nih.gov/compound/16850)
- **groups:** approved, investigational

## About

A phthalic indicator dye that appears yellow-green in normal tear film and bright green in a more alkaline medium, such as the aqueous humor, and is used therapeutically as a diagnostic aid in corneal injuries and corneal trauma. It has been approved by FDA for use in externally applied drugs and cosmetics.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly distributed
- **Sources and uses:** For diagnostic imaging. Primarily indicated in diagnostic fluorescein angiography or angioscopy of the fundus and of the iris vasculature.
- **Mechanism of toxicity:** Fluorescein sodium is used extensively as a diagnostic tool in the field of ophthalmology. Fluorescein is a fluorescent compound or fluorophore having a maximum absorbance of 494 m and an emission maximum of 521 nm. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4808">T3DB T3D4808</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2321-07-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:31624">ChEBI 31624</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fluorescein | parent | 332.311 | C20H12O5 | PubChem | [16850](https://pubchem.ncbi.nlm.nih.gov/compound/16850) | Mills_1997, Monti_2023, Srinivas_2018 |
| fluorescein glucuronide (SFG) | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Srinivas_2018_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy human volunteers, n = 29 (49 eyes). [Run it in the simulator](drugs/toxin_fluorescein/Fluorescein_Srinivas2018_reference.md?tab=Simulation) · [record](drugs/toxin_fluorescein/Fluorescein_Srinivas2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Srinivas_2018_reference](drugs/toxin_fluorescein/Fluorescein_Srinivas2018_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Srinivas SP et al., Corneal epithelial permeability to fluo…, PloS one (2018) | [10.1371/journal.pone.0198831](https://doi.org/10.1371/journal.pone.0198831) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Li_2024_reference](drugs/toxin_fluorescein/Fluorescein_Li2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li Y et al., In Vivo Tissue Distribution and Pharmac…, Foods (Basel, Switzerland) (2024) | [10.3390/foods13183019](https://doi.org/10.3390/foods13183019) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q91, Q27 — no SI value to build from</sub> | [Mills_1997_reference](drugs/toxin_fluorescein/Fluorescein_Mills1997_reference.md) | held back | 1-compartment, oral | 2 | Mills CO et al., Cholyllysyl fluroscein and related lysy…, The Yale journal of biology… (1997) | — |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q54, Q66 — no SI value to build from</sub> | [Monti_2023_reference](drugs/toxin_fluorescein/Fluorescein_Monti2023_reference.md) | held back | 1-compartment, oral | 8 | Monti C et al., Physiologically-Based Pharmacokinetic M…, Annual International Confer… (2023) | [10.1109/EMBC40787.2023.10340273](https://doi.org/10.1109/EMBC40787.2023.10340273) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Abduljalil_2008_reference](drugs/toxin_fluorescein/Fluorescein_Abduljalil2008_reference.md) | — | 1-compartment (no model) | 0 | Abduljalil K et al., Modelling ocular pharmacokinetics of fl…, European journal of clinica… (2008) | [10.1007/s00228-007-0457-3](https://doi.org/10.1007/s00228-007-0457-3) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Araie_1987_reference](drugs/toxin_fluorescein/Fluorescein_Araie1987_reference.md) | — | 1-compartment (no model) | 0 | Araie M et al., The rate of diffusion of fluorophores t…, Experimental eye research (1987) | [10.1016/s0014-4835(87)80027-1](https://doi.org/10.1016/s0014-4835(87)80027-1) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Morejon_2023_reference](drugs/toxin_fluorescein/Fluorescein_Morejon2023_reference.md) | — | 1-compartment (no model) | 0 | Morejon A et al., Effect of molecular weight and tissue l…, Osteoarthritis and cartilag… (2023) | [10.1016/j.ocarto.2023.100360](https://doi.org/10.1016/j.ocarto.2023.100360) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sebbag_2019_reference](drugs/toxin_fluorescein/Fluorescein_Sebbag2019_reference.md) | — | 1-compartment (no model) | 0 | Sebbag L et al., Kinetics of Fluorescein in Tear Film Af…, Frontiers in veterinary sci… (2019) | [10.3389/fvets.2019.00457](https://doi.org/10.3389/fvets.2019.00457) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Song_2022_reference](drugs/toxin_fluorescein/Fluorescein_Song2022_reference.md) | — | 1-compartment (no model) | 2 | Song S et al., Fluorescent Labeling of Polymannuronic…, Marine drugs (2022) | [10.3390/md20050289](https://doi.org/10.3390/md20050289) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Wubuli_2024_reference](drugs/toxin_fluorescein/Fluorescein_Wubuli2024_reference.md) | — | 1-compartment (no model) | 2 | Wubuli A et al., In vivo pharmacokinetics of Glycyrrhiza…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1431221](https://doi.org/10.3389/fphar.2024.1431221) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **VEGFA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chang_2013](drugs/toxin_fluorescein/pgx_Chang_2013_VEGFA_Q100.md) | Chang W et al., Pharmacogenetic association with early…, Molecular vision (2013) | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 06:35 | 39:20 | 4/6/0 | 0/0/0 | 0/0/1 | 922,174/98,215 | ollama / glm-5.3-flash | 46 | 6/29 | 46/0 | 0 |

## Coverage

- **PubMed hits:** 400 matched, 178 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 10  ·  extracted 1  ·  needs review 3  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abduljalil_2008.pdf` | Abduljalil K et al., Modelling ocular pharmacokinetics of fl…, European journal of clinica… (2008) | popPK | 9 | [10.1007/s00228-007-0457-3](https://doi.org/10.1007/s00228-007-0457-3) | [18219479](https://pubmed.ncbi.nlm.nih.gov/18219479) | Population compartmental PK model of fluorescein with relative bioavailability; specific numeric values (folds, F) partly present, but detailed parameter estimates likely in tables not shown. |
| `Araie_1987.pdf` | Araie M et al., The rate of diffusion of fluorophores t…, Experimental eye research (1987) | popPK | 7 | [10.1016/s0014-4835(87)80027-1](https://doi.org/10.1016/s0014-4835(87)80027-1) | [3556451](https://pubmed.ncbi.nlm.nih.gov/3556451) | Reports quantitative fluorescein corneal permeability/diffusion parameters (epithelial lag time ~5 min, permeability values) directly in the abstract, though some permeability numbers may only be implied. |
| `Monti_2024.pdf` | Monti CE et al., Assessing the degree of hepatic ischemi…, American journal of physiol… (2024) | popPK | 6 | [10.1152/ajpgi.00048.2024](https://doi.org/10.1152/ajpgi.00048.2024) | [38917324](https://pubmed.ncbi.nlm.nih.gov/38917324) | A PBPK model of sodium fluorescein disposition with fitted Vmax for MRP2 is clearly the subject, but no numeric parameter values appear in the evidence (referenced as measured values/parameters). |

<sub>queue written 2026-11-13 06:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akasaka_1988 | irrelevant | 0 | 0 | Fluorescein isothiocyanate is used only as an analytical labeling reagent; kinetic parameters concern radiolabeled BSA nanospheres, not fluorescein. |
| popPK | Anunciado_1987 | irrelevant | 0 | 0 | Fluorescein appears only as a fluorescent labeling reagent (FITC), with no kinetic parameters for fluorescein. |
| PGx | Arora_2002 | not_relevant | 0 | 0 | Fluorescein is only used as a fluorescent label on PMOs; no gene variant effect on fluorescein PK/PD is reported. |
| PGx | Asano_2014 | not_relevant | 0 | 0 | The paper concerns engineered bispecific antibodies (hEx3-scDb-Fc) targeting EGFR/CD3; fluorescein and gene variant/genotype effects on PK or PD are not studied. |
| popPK | Bai_2020 | irrelevant | 1 | 2 | The subject substance is fucoidan (labeled with fluorescein isothiocyanate); fluorescein/FITC serves only as a fluorescent tag and analytical reagent, so all kinetic parameters belong to FITC-fucoidan, not fluorescein itself. |
| popPK | Banzhaf_2019 | irrelevant | 1 | 2 | Sodium fluorescein is a topical fluorescent tracer in ex vivo skin; only qualitative fluorescence intensities and logP are reported, no kinetic parameters. |
| PGx | Barbosa_2025 | not_relevant | 0 | 0 | The paper is about genotyping CYP2C9*2 via an electrochemical sensor; fluorescein is only a label, and no PK/PD effect of genotype on fluorescein is reported. |
| PGx | Baudoin_2013 | not_relevant | 0 | 0 | Fluorescein is only used as fluorescein diacetate viability staining; no variant/genotype effect on its PK/PD is reported. |
| popPK | Bellnier_1995 | irrelevant | 0 | 0 | Fluorescein is used only as an analytical/assay dye for measuring vascular perfusion; all quantitative parameters (FE50, Hill m) belong to a photosensitizer assay, not fluorescein's toxicokinetics. |
| popPK | Bernard_1984 | irrelevant | 0 | 0 | Fluorescein appears only as a cell labelling reagent; no kinetic parameters for fluorescein are reported. |
| popPK | Bi_2022 | irrelevant | 0 | 0 | Kinetic parameters belong to Polygonatum polysaccharide; fluorescein (FITC) is used only as a fluorescent labeling reagent/analytical probe, with no fluorescein toxicokinetic parameters. |
| popPK | Binns_1995 | irrelevant | 0 | 0 | Fluorescein (FITC) appears only as a cell-labelling technique; no kinetic parameters for fluorescein are reported. |
| popPK | Borchert_2006 | irrelevant | 0 | 0 | Fluorescein appears only as an angiography reagent; no kinetic parameters for fluorescein are reported. |
| PGx | Buckberry_2020 | not_relevant | 0 | 0 | Fluorescein is only used as a tracer for solute clearance in bench dialysis experiments; no gene variant/genotype effect on PK/PD reported. |
| popPK | Burri_2021 | irrelevant | 0 | 0 | Fluorescein appears only as an angiographic imaging dye in a rabbit laser/RPE study, with no kinetic parameters of fluorescein reported. |
| popPK | Bömers_2020 | irrelevant | 1 | 1 | This is a surgical usability/outcome study with no quantitative kinetic parameters for fluorescein; tissue distribution is only described qualitatively without numeric values. |
| popPK | Cain_1995 | irrelevant | 0 | 0 | Fluorescein is used only as an angiography reagent to detect lesions; no toxicokinetic parameters for fluorescein are reported. |
| popPK | Cain_1999 | irrelevant | 0 | 0 | Fluorescein appears only as an angiography reagent for detecting retinal lesions; no toxicokinetic parameters for fluorescein are reported. |
| PGx | Call_2024 | not_relevant | 0 | 0 | Paper describes a pH biosensor tool in Trypanosoma brucei; fluorescein is only a sensor platform, with no gene-variant effect on any PK/PD parameter reported. |
| PGx | Casselman_2021 | not_relevant | 0 | 0 | Fluorescein angiography is only mentioned as a diagnostic imaging technique; no pharmacogenomic effect on fluorescein PK/PD is reported. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | Fluorescein is used as a chemical tag fluorophore, not a drug with PK/PD pharmacogenomic effects. |
| popPK | Chiang_2016 | relevant | 4 | 5 | Reports time-course spread data for fluorescein itself in rabbit suprachoroidal space (e.g., co-dissociation transport times of 2–4 d), but not classic kinetic parameters like half-life or rate constants; numbers are partly in the abstract, with spread-area curves in figures. |
| popPK | Chin_2013 | irrelevant | 3 | 2 | Fluorescein is used only as a fluorescent tracer probe to measure cartilage-tissue diffusion/partition coefficients in injured explants, not as a substance with its own toxicokinetic parameters; no numeric values appear in the evidence (likely in figures/tables not provided). |
| popPK | Correia_2011 | irrelevant | 0 | 0 | Fluorescein appears only as an analytical integrity marker (% transport) in an in vitro placental model; kinetic parameters concern PCB52/PCB180, not fluorescein. |
| popPK | Cortas_1989 | irrelevant | 0 | 0 | FITC is used only as an analytical labeling reagent for Na,K-ATPase in brine shrimp; no toxicokinetic parameter for fluorescein itself is reported. |
| popPK | Courant_1989 | irrelevant | 0 | 0 | Fluorescein appears only as an angiography reagent for detecting retinal laser damage; no kinetic parameter of fluorescein is reported. |
| PGx | Crocenzi_2001 | not_relevant | 0 | 0 | Fluorescein appears only as part of a fluorescent bile acid probe; no genetic variant effects on PK/PD are reported. |
| PGx | Csaky_2015 | not_relevant | 3 | 2 | Complement factor H genotype is mentioned only as having no effect on clinical responses; no PK/PD parameter of fluorescein is assessed by genotype. |
| PGx | Curtaz_2025 | not_relevant | 0 | 0 | Fluorescein is only a permeability tracer, not a drug; no gene variant/genotype effect on any PK or PD parameter is reported. |
| popPK | Demková_2019 | irrelevant | 0 | 0 | Fluorescein diacetate appears only as a soil enzyme activity assay, not a substance with kinetic parameters. |
| PGx | Diaz_2020 | not_relevant | 0 | 0 | Fluorescein diacetate hydrolysis is a bacterial metabolic activity assay, not a drug PK/PD parameter, and no gene variant/genotype effects are reported. |
| popPK | Ding_2022 | irrelevant | 0 | 2 | Fluorescein (FITC) is merely a fluorescent label/tracer for imaging nanoparticle distribution; all kinetic parameters (AUC, half-life, MRT) belong to methylprednisolone, not fluorescein. |
| popPK | Dittrich_2010 | irrelevant | 1 | 3 | Fluorescein (5-carboxy-fluorescein) appears only as an encapsulated cargo model compound in peptide nanoparticles; no in vivo kinetic parameters of fluorescein are studied, and any partition/encapsulation numbers pertain to the bead system, not organism toxicokinetics. |
| popPK | Dubey_2011 | irrelevant | 0 | 0 | Fluorescein appears only as a reagent (FITC apoptosis assay); the kinetic parameters concern indinavir, a different substance. |
| popPK | Fang_2020 | irrelevant | 1 | 2 | Fluorescein (as FITC) is only a labeling probe for tracing P. ginseng protein distribution; the kinetic parameters belong to the labeled protein, not fluorescein itself. |
| popPK | Fang_2026 | irrelevant | 0 | 0 | Fluorescein is only a diagnostic staining agent in tear-film testing; no fluorescein kinetic parameters of any kind are reported. |
| PGx | Ferreira_2017 | not_relevant | 1 | 5 | PRND genotype affects sperm fertility outcomes, not fluorescein PK/PD; fluorescein is only an antibody label. |
| popPK | Framme_2008 | irrelevant | 1 | 0 | Fluorescein is used only as an angiographic visualization reagent; no kinetic parameters of fluorescein are reported. |
| popPK | Guo_2022 | irrelevant | 1 | 1 | The kinetic parameters reported (T1/2, MRT, AUC) belong to FITC-labeled inulin-type fructan CPA, not to fluorescein itself, which is only used as an analytical labeling reagent. |
| popPK | Gupte_2008 | irrelevant | 0 | 0 | Fluorescein is used only as a fluorescent label for cell uptake imaging; no kinetic parameters for fluorescein are reported. |
| PGx | Hagstrom_2013 | not_relevant | 1 | 3 | Fluorescein appears only as a diagnostic dye in fluorescein angiography; the paper's pharmacogenomic analyses concern response to ranibizumab/bevacizumab, not fluorescein PK/PD, and found no significant associations. |
| popPK | Hsu_2019 | irrelevant | 1 | 0 | Fluorescein is only a label (FITC) on a nanoparticle carrier; no quantitative toxicokinetic parameters for fluorescein are reported. |
| popPK | Jaiswal_2018 | irrelevant | 0 | 0 | Fluorescein appears only as fluorescein diacetate substrate for microbial enzyme activity; no toxicokinetic parameters for fluorescein are reported. |
| popPK | Jiménez-Cervantes_1998 | irrelevant | 0 | 0 | Fluorescein is used only as a fluorescent label (FRET reagent) on tyrosinase, with no kinetic parameters for fluorescein itself. |
| PGx | Jin_2016 | not_relevant | 0 | 0 | In vitro herb inhibition of CYP/UGT enzyme activity; fluorescein is only an assay substrate, no gene variant or genotype effect reported. |
| PGx | Jin_2021 | not_relevant | 0 | 0 | Fluorescein is used only as a staining diagnostic of corneal epithelial damage; no gene variant effect on fluorescein PK/PD parameters is reported. |
| PGx | Kaarniranta_2012 | not_relevant | 0 | 0 | ADIPOR1 SNP associated with AMD disease status; fluorescein used only for diagnosis, no PK/PD effect reported. |
| PGx | Karakida_2024 | not_relevant | 0 | 0 |  |
| PGx | Kenaan_2011 | not_relevant | 2 | 3 | Fluorescein is only a labeling reagent for studying CYP2B4-CPR interactions; no PGx effect on fluorescein PK/PD. |
| popPK | Kumar_2024 | irrelevant | 1 | 1 | Fluorescein appears only as FITC-dextran, a permeability tracer endpoint; no kinetic parameters for fluorescein itself are reported, and FITC-dextran serum levels serve as a damage biomarker without clear numeric values in the evidence. |
| popPK | Kunugita_2007 | irrelevant | 0 | 0 | Fluorescein (FITC) is only an analytical/antibody labeling reagent; all kinetic parameters (TCR mutant half-lives) relate to mutant cells, not fluorescein. |
| popPK | Lafleur_1973 | irrelevant | 0 | 0 | Fluorescein appears only as a fluorescent label on anti-immunoglobulin antiserum (analytical reagent); no toxicokinetic parameters of fluorescein are reported. |
| popPK | Laskarin_2005 | irrelevant | 0 | 0 | Fluorescein (FITC-dextran) is only an uptake assay reagent; no kinetic parameters for fluorescein are reported. |
| PGx | Lauwers_2026 | not_relevant | 0 | 0 | Paper concerns pH-gated engineered fusion proteins and CAR T engagement; fluorescein is a synthetic tag, with no gene variant affecting PK/PD parameters. |
| popPK | Lazorová_1993 | irrelevant | 0 | 0 | Fluorescein serves only as a fluorescent label on LTB; no kinetic parameters (half-life, clearance, uptake rates, etc.) are reported for fluorescein itself. |
| popPK | Lee_2018 | irrelevant | 2 | 1 | Fluorescein (sodium fluorescein) is used only as an in vitro BBB integrity tracer in human iPSC-derived endothelial cells; the permeability coefficients themselves appear to reside in figures/supplementary material not included. |
| popPK | Leng_2025 | irrelevant | 0 | 0 | Fluorescein (isothiocyanate) is used only as an analytical derivatization reagent; no kinetic parameters for fluorescein are reported. |
| popPK | Li_2017 | irrelevant | 0 | 0 | Fluorescein appears only as an analytical reagent (DCFH-DA ROS assay), not as a subject substance with kinetic parameters. |
| PGx | Li_2023 | not_relevant | 0 | 0 | Fluorescein sodium is used only as a staining agent to assess corneal wound area; no gene variant/genotype/phenotype effect on its PK or PD is reported. |
| popPK | Li_2024 | irrelevant | 1 | 2 | Fluorescein (FITC) appears solely as a fluorescent labelling reagent; the kinetic parameters (T1/2 26.92 h, CL/F, Tmax) belong to the FITC-labelled polysaccharide complex, not to fluorescein itself. |
| PGx | Liao_2025 | not_relevant | 0 | 0 | Fluorescein is used only as an intestinal permeability probe; no gene variant/genotype effect on any PK/PD parameter is reported. |
| PGx | Liu_2013 | not_relevant | 0 | 0 | Fluorescein is only used in FACS labeling; no gene variant effect on fluorescein PK/PD parameters reported. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | Fluorescein diacetate is mentioned only as a cell viability stain in plant tissue culture; no gene effect on fluorescein PK/PD parameters is reported. |
| popPK | Maherani_2013 | irrelevant | 1 | 1 | The subject is calcein (a fluorescein derivative) in a liposomal drug-delivery system; no in-vivo toxicokinetic parameters for fluorescein itself are reported. |
| PGx | Mao_2026 | not_relevant | 0 | 0 | No gene/genotype effects on fluorescein PK/PD; paper is about a hydrogel formulation effect on corneal healing only. |
| PGx | Markand_2016 | not_relevant | 0 | 0 | Fluorescein angiography is only a diagnostic imaging tool; MTHFR/Crb1 genotypes affect retinal phenotype, not fluorescein PK/PD parameters. |
| PGx | McLean_2024 | not_relevant | 0 | 0 | Fluorescein is used only as a nanoparticle label; no gene variant/genotype effect on PK/PD is reported. |
| popPK | Mehvar_1994 | irrelevant | 2 | 5 | Fluorescein appears only as a fluorescent label on dextrans (the actual subject substance measured), so the kinetic parameters belong to dextran, not fluorescein itself; numeric tissue:serum ratios and clearances are present in the abstract but pertain to FDs. |
| popPK | Min_2015 | irrelevant | 1 | 0 | Fluorescein (FITC) appears solely as an analytical label/labeling reagent; all PK parameters (t1/2, CL, Vd) belong to the FITC-labeled longan polysaccharide (LPPF), not to fluorescein itself. |
| popPK | Minematsu_2014 | irrelevant | 0 | 0 | Fluorescein (as conjugated dextran) is an experimental tracer for detecting skin protein leakage, not an index substance with any kinetic parameters. |
| popPK | Mingming_2017 | irrelevant | 0 | 0 | Fluorescein is only a fluorescent label on the subject drug PS916; the kinetic parameters (Vss, clearance, bioavailability) belong to PS916-FTC as a prodrug/delivery system, not to fluorescein itself. |
| popPK | Monti_2024 | relevant | 6 | 2 | A PBPK model of sodium fluorescein disposition with fitted Vmax for MRP2 is clearly the subject, but no numeric parameter values appear in the evidence (referenced as measured values/parameters). |
| popPK | Moradi_2016 | irrelevant | 0 | 0 | Fluorescein appears only as the FITC label in Annexin V staining; no toxicokinetic parameters for fluorescein are reported. |
| PGx | Morais_2023 | not_relevant | 2 | 0 | Fluorescein is only a probe label in a biosensor for detecting CYP2C9*3; no PK/PD effect of genotype on fluorescein is reported. |
| PGx | Neuhaus_2014 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on fluorescein PK/PD is reported; fluorescein permeability changes are OGD/astrocyte-condition effects, not pharmacogenomic. |
| PGx | Nishihashi_2017 | not_relevant | 0 | 0 | The study examines HIF-1 activation by cobalt chloride altering BCRP expression/function, not any gene variant/genotype/phenotype effect. |
| PGx | Nowak-Sliwinska_2013 | not_relevant | 0 | 0 | No gene variant or pharmacogenomic effect on fluorescein PK/PD parameters is reported; fluorescein is used only as diagnostic angiography dye. |
| PGx | Oshikata-Miyazaki_2016 | not_relevant | 0 | 0 | No genetic variant/genotype/phenotype is studied; effects on fluorescein ADME stem from culture conditions, not pharmacogenomics. |
| popPK | Pang_2019 | irrelevant | 0 | 0 | Fluorescein (FAM) is only an analytical probe label in a pathogen detection assay; no toxicokinetic parameters of fluorescein are reported. |
| PGx | Paszti-Gere_2014 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on fluorescein PK/PD; FITC-dextran is only a permeability marker in an LPS inflammation model. |
| popPK | Patane_2013 | irrelevant | 0 | 0 | Fluorescein appears only as corneal staining dye in a dexamethasone toxicokinetic study, with no fluorescein kinetic parameters. |
| PGx | Patel_2025 | not_relevant | 0 | 0 | Fluorescein is only used as an imaging tracer for nanoparticle localization; no gene variant/genotype effects on PK/PD are reported. |
| PGx | Qiao_2021 | not_relevant | 2 | 0 | Fluorescein is only a bile excretion probe; no gene/variant effect on its PK/PD parameters is reported, only donor variability in metabolism. |
| popPK | Saint-Jeannet_1994 | irrelevant | 0 | 0 | Fluorescein is only a lineage-tracing dye injected into frog embryo blastomeres; no kinetic parameters of any kind are reported. |
| PGx | Salomon_2014 | not_relevant | 0 | 0 | In vitro cell line characterization of fluorescein as paracellular marker; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Selver_2016 | not_relevant | 0 | 0 | No gene variant/genotype or pharmacogenomic effect on fluorescein PK/PD is reported; fluorescein is used only for corneal staining scoring. |
| popPK | Seternes_2007 | irrelevant | 1 | 1 | Fluorescein appears only as an analytical/fluorescent label on pDNA; no kinetic parameters of fluorescein itself are reported. |
| popPK | Shah_2019 | irrelevant | 1 | 3 | Fluorescein (FITC) appears solely as a labeling reagent; the kinetic/transport parameters (partition coefficients, permeability) belong to FITC-insulin conjugates, not fluorescein itself, though numeric values (P = 0.07–0.12) are present in text. |
| popPK | Shan_2024 | irrelevant | 0 | 0 | Fluorescein appears solely as an analytical labeling reagent (6-TAMRA, Cy3, BODIPY) conjugated to a conotoxin; all kinetic parameters (IC50, stability retention in aCSF) belong to the peptide analogs, not fluorescein itself. |
| popPK | Shao_2022 | irrelevant | 1 | 1 | Fluorescein (FITC) is only an analytical label on polysaccharide, not the subject substance, and no kinetic parameters are reported. |
| popPK | Sharma_2010 | irrelevant | 0 | 0 | Fluorescein appears only as an FITC label for toxin binding assays; no kinetic parameters for fluorescein are reported. |
| PGx | Shi_2026 | not_relevant | 5 | 3 | Fluorescein (FITC-dextran) is used only as a permeability tracer in barrier assays, not as a drug with PK/PD parameters affected by genotype. |
| popPK | Shiohama_2024 | irrelevant | 1 | 0 | Fluorescein only serves as a fluorescent label on organosilica particles, and only qualitative lung distribution imaging at 24 h is reported—no kinetic parameters for fluorescein itself. |
| popPK | Singh_2012 | irrelevant | 2 | 3 | Fluorescein is only a fluorescent label on PEG nanocarriers; the parameters (signal ratios, tissue distribution rank order) concern nanocarrier tumor distribution, not fluorescein's toxicokinetics. |
| popPK | Son_2003 | relevant | 4 | 3 | FITC-labeled glycol-chitosan biodistribution in tumor-bearing rats is described with a qualitative tissue time course (maintained ~8 days), but no numeric kinetic parameter values appear in the evidence. |
| popPK | Song_2022 | irrelevant | 2 | 2 | fluorescein is only a fluorescent label (FITC) on polymannuronic acid; the kinetic parameters (t½ 2.85 h, Ke 0.24, etc.) belong to FITC-PM, not fluorescein itself. |
| popPK | Steele_2011 | irrelevant | 2 | 1 | Fluorescein diacetate is used only as a hydrophobic fluorescent surrogate to mimic paclitaxel release from PLGA polymer films in vitro — a biomaterial assay, not toxicokinetics of fluorescein in any organism; the diffusion coefficients/rate constants are said to be "listed in Table 1", whose numeric content is not included in the evidence. |
| popPK | Sun_2001 | irrelevant | 2 | 2 | Uptake of fluorescein in transfected cells is transport characterization with no kinetic parameter values (no Km/Vmax numbers) given and fluorescein is a substrate probe, not the toxicokinetic subject. |
| popPK | Szabó_2022 | irrelevant | 0 | 0 | Fluorescein diacetate is used only as an enzymatic activity assay reagent in soil/sediment samples; no toxicokinetic parameters of fluorescein in humans or animals are reported. |
| popPK | Taechowisan_2024 | irrelevant | 0 | 0 | Fluorescein appears only as an analytical reagent (FITC staining); no kinetic parameters for fluorescein. |
| PGx | Takezawa_2022 | not_relevant | 0 | 0 | Cell-culture line comparison of fluorescein diacetate accumulation/transporter expression; no gene variant/genotype effect on fluorescein PK/PD parameters. |
| PGx | Thakur_2021 | not_relevant | 0 | 0 | Paper concerns bacterial UvrC DNA repair biochemistry; fluorescein is a DNA adduct probe, not a drug, with no gene-variant PK/PD effect. |
| popPK | Wang_2020 | irrelevant | 1 | 1 | Fluorescein (FITC) is only an analytical/labeling reagent for imaging the nanocarrier; kinetic parameters (AUC, Cmax, MRT) belong to dexamethasone, not fluorescein. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | Fluorescein appears only as FITC-coupled lectin reagent; kinetic parameters (ocular tissue distribution) concern PNS saponins, not fluorescein. |
| PGx | Wehl_2026 | not_relevant | 0 | 0 | Fluorescein (FITC-dextran) is only used as a paracellular permeability marker in an in vitro model comparison; no gene variant/genotype effect on PK/PD is reported. |
| PGx | Weiss_2015 | not_relevant | 0 | 0 | In vitro drug-drug interaction study for bosentan metabolites; fluorescein is only a probe substrate (8-fluorescein-cAMP uptake) with no gene variant effect on its PK/PD. |
| popPK | Weiss_2025 | irrelevant | 1 | 1 | Sodium fluorescein serves only as an analytical test aerosol for deposition performance of an in vitro exposure chamber; no toxicokinetic parameter (half-life, clearance, rate constant, etc.) for fluorescein is reported, only deposition variability percentages. |
| PGx | Whiting_2015 | not_relevant | 0 | 0 | Fluorescein angiography is only a diagnostic imaging tool; no gene effect on fluorescein PK/PD parameters is reported. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | Fluorescein is used only as an imaging diagnostic agent; no gene-variant effect on fluorescein PK/PD parameters is reported. |
| popPK | Wubuli_2024 | irrelevant | 0 | 0 | Fluorescein (5-DTAF) is used only as an analytical label for a glucan polysaccharide; the kinetic values (t1/2, AUC, bioavailability) belong to the polysaccharide, not fluorescein itself. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on PK/PD; fluorescein-dextran permeability is altered by retinoic acid treatment, not by pharmacogenomics. |
| popPK | Yamashita_2017 | irrelevant | 0 | 0 | Fluorescein serves only as an FITC label for the dendrimer; kinetic parameters (bone uptake, clearance) belong to the PAMAM carriers, not fluorescein itself. |
| popPK | Yamashita_2022 | irrelevant | 2 | 1 | Fluorescein is only a FITC label on a dendrimer carrier; no kinetic parameters for fluorescein itself are reported (tissue distribution data not quantified in evidence). |
| popPK | Yuan_2012 | irrelevant | 0 | 0 | Fluorescein appears only as an analytical staining reagent; the kinetic parameters (Cmax etc.) belong to FK506, not fluorescein. |
| popPK | Zhang_2018 | relevant | 2 | 3 | Fluorescein appears only as a fluorescent label on the polysaccharide; kinetic parameters belong to ASP, and no numeric values are shown in the provided evidence. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | Fluorescein appears only as part of annexin V-FITC staining reagent; no PGx effect on its PK/PD is reported. |
| popPK | Zheng_2021 | irrelevant | 0 | 2 | Fluorescein appears only as the DTAF label on lentinan; kinetic parameters belong to lentinan, not fluorescein, and no numeric fluorescein values are given. |
| PGx | Zheng_2021_2 | not_relevant | 1 | 1 | DTAF-fluorescein is only a label for lentinan; no pharmacogenomic effect on fluorescein PK/PD is reported. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | Fluorescein (FTSC) is only an analytical label for a polysaccharide ME-2; no kinetic parameters for fluorescein itself are reported. |
| PGx | de_2010 | not_relevant | 4 | 7 | Effects are transporter-mediated (knockout/overexpression of transporter proteins), not gene variants/genotypes; CLF is not fluorescein per se, and no pharmacogenomic polymorphism effect on PK/PD is reported. |
| PGx | van_2014 | not_relevant | 0 | 0 | Fluorescein is used only as diagnostic angiography; ABCA4 variants affect disease phenotype, not fluorescein PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfluorescein%5D&body=Drug%3A%20fluorescein%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fluorescein/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 06:23 UTC</sub>
