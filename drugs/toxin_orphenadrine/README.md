<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Orphenadrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Orphenadrine_Labout1982_reference&quot;,&quot;label&quot;:&quot;Labout_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_orphenadrine/Orphenadrine_Labout1982_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Orphenadrine

- **generic name:** Orphenadrine
- **T3DB:** [T3D3005](http://www.t3db.ca/toxins/T3D3005) · **DrugBank:** [DB01173](https://go.drugbank.com/drugs/DB01173) · **PubChem:** [CID 4601](https://pubchem.ncbi.nlm.nih.gov/compound/4601)
- **groups:** approved, investigational

## About

Orphenadrine is only found in individuals that have used or taken this drug. It is a muscarinic antagonist used to treat drug-induced parkinsonism and to relieve pain from muscle spasm. [PubChem] Orphenadrine binds and inhibits both histamine H1 receptors and NMDA receptors. It restores the motor disturbances induced by neuroleptics, in particular the hyperkinesia. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** orphenadrine is almost completely absorbed in the gastrointestinal tract.
- **Sources and uses:** Indicated for the treatment of Parkinson's disease.
- **Mechanism of toxicity:** Orphenadrine binds and inhibits both histamine H1 receptors and NMDA receptors. It restores the motor disturbances induced by neuroleptics, in particular the hyperkinesia. …
- **Acute toxicity:** LD50: 100 mg/kg (Oral, Mouse)
LD50: 255 mg/kg (Oral, Rat)
- **Treatment:** Treatment for orphenadrine overdose is evacuation of stomach contents (when necessary), charcoal at repeated doses, intensive monitoring, and appropriate supportive treatment of any emergent anticholinergic effects.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3005">T3DB T3D3005</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 83-98-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:7789">ChEBI 7789</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| orphenadrine | parent | 269.388 | C18H23NO | PubChem | [4601](https://pubchem.ncbi.nlm.nih.gov/compound/4601) | Elghazali_2008, Labout_1982 |

## Start here

> **Labout_1982_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> healthy male volunteers (also patients on repeated dosing), n = 5 (volunteers; patients additionally studied). [Run it in the simulator](drugs/toxin_orphenadrine/Orphenadrine_Labout1982_reference.md?tab=Simulation) · [record](drugs/toxin_orphenadrine/Orphenadrine_Labout1982_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span> | [Labout_1982_reference](drugs/toxin_orphenadrine/Orphenadrine_Labout1982_reference.md) | ▶ model + simulator | retention, 1 pool | 1 | Labout JJ et al., Difference between single and multiple…, European journal of clinica… (1982) | [10.1007/BF00637624](https://doi.org/10.1007/BF00637624) |
| <span class="pk-rf" hidden data-species="camelid" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Elghazali_2008_reference](drugs/toxin_orphenadrine/Orphenadrine_Elghazali2008_reference.md) | — | 1-compartment (no model) | 7 | Elghazali M et al., Pharmacokinetic, metabolism and withdra…, Research in veterinary scie… (2008) | [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=orphenadrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GRIN1 (target), GRIN2D (target), GRIN3A (target), GRIN3B (target), HRH1 (target), SCN10A (inhibitor), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 10:22 | 8:08 | 1/1/0 | 0/0/0 | 0/0/0 | 221,533/21,634 | ollama / glm-5.3-flash | 10 | 1/2 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 94 matched, 94 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elghazali_2008.pdf` | Elghazali M et al., Pharmacokinetic, metabolism and withdra…, Research in veterinary scie… (2008) | popPK | 10 | [10.1016/j.rvsc.2008.01.006](https://doi.org/10.1016/j.rvsc.2008.01.006) | [18321539](https://pubmed.ncbi.nlm.nih.gov/18321539) | Full numeric pharmacokinetic parameters (half-lives, volumes, clearance, AUC) for orphenadrine in camels are directly reported in the abstract. |
| `Labout_1982.pdf` | Labout JJ et al., Difference between single and multiple…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00637624](https://doi.org/10.1007/BF00637624) | [7056281](https://pubmed.ncbi.nlm.nih.gov/7056281) | Half-lives (13.2–20.1 h, 2–3 fold longer after multiple dosing) for orphenadrine in humans are reported directly in the abstract, though some numeric detail may be in dog experiments not fully given. |

<sub>queue written 2026-11-14 10:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bachmann_1992 | irrelevant | 1 | 1 | Orphenadrine appears only as a P450 inhibitor in a rat study of ethosuximide metabolism; no kinetic parameters for orphenadrine itself are reported or numerically presented. |
| popPK | Bachmann_1993 | irrelevant | 0 | 0 | Orphenadrine appears only as a CYP2B/C inhibitor tool; kinetic parameters are for theophylline, not orphenadrine. |
| popPK | Bast_1983 | relevant | 4 | 2 | A rat study of orphenadrine metabolism and CYP interaction, but only descriptive percentages/doses are given in the abstract — no numeric kinetic parameters (clearance, half-life, Km/Vmax) for orphenadrine appear in the evidence. |
| popPK | Brain_1998 | irrelevant | 2 | 2 | Orphenadrine is used only as a P450 inhibitor tool in a rat study of ifosfamide metabolite pharmacokinetics; the kinetic parameters (AUC, half-life, Cmax) belong to 4-OH-IF and chloroacetaldehyde, not to orphenadrine itself. |
| popPK | Brocks_1999 | irrelevant | 3 | 1 | A review summarizing PK characteristics of anticholinergics including orphenadrine, but citing others' studies with no original numeric kinetic parameters (only ranges like 30–70% bioavailability) and no tables or supplementary data provided. |
| popPK | Chang_1981 | irrelevant | 0 | 0 | Orphenadrine appears only as an analytical internal standard for nefopam; no kinetic parameters for orphenadrine are reported. |
| PGx | Chang_1993 | not_relevant | 1 | 3 | Orphenadrine appears only as a chemical inhibitor of CYP2B6 in in vitro cyclophosphamide studies; no gene variant/genotype effect on orphenadrine's own PK or PD parameters is reported. |
| popPK | Choi_2006 | irrelevant | 0 | 0 | Orphenadrine appears only as a CYP inducer pretreatment in a metformin PK study; no kinetic parameters of orphenadrine itself are reported. |
| popPK | Choi_2010 | irrelevant | 2 | 3 | Orphenadrine is used only as a CYP2B1/2 inducer pretreatment; all kinetic parameters (half-lives, AUC, Vd, CLint) belong to mirodenafil/SK3541, not to orphenadrine itself. |
| PGx | Choi_2010 | not_relevant | 0 | 0 | Orphenadrine is used only as a CYP inducer probe, not as the study drug; no gene variant/genotype effects on orphenadrine PK/PD are reported. |
| popPK | Chou_2005 | irrelevant | 0 | 0 | Orphenadrine appears only as an inhibitor in in vitro microsome experiments studying dimemorfan metabolism; no kinetic parameters for orphenadrine itself. |
| popPK | Chung_2006 | irrelevant | 0 | 0 | Orphenadrine appears only as a CYP2E1 inducer pretreatment in a kinetic study of a different substance (ipriflavone); no orphenadrine kinetic parameters are reported. |
| PGx | Chung_2006 | not_relevant | 0 | 0 | Orphenadrine only appears as an enzyme inducer tool drug for ipriflavone PK in rats; no pharmacogenomic effect on orphenadrine's own PK/PD is reported. |
| popPK | Davydova_2000 | irrelevant | 0 | 0 | Orphenadrine is used only as an analytical internal standard; no kinetic parameters for orphenadrine itself are reported. |
| popPK | Desaphy_2014 | irrelevant | 1 | 0 | ED50 potency values for orphenadrine are pharmacodynamic, not toxicokinetic parameters, and no kinetic constants (half-life, clearance, etc.) are reported. |
| PGx | Ekins_1997 | not_relevant | 2 | 2 | Orphenadrine is studied only as a CYP2B6 inhibitor probe; no gene variant/genotype effect on its PK/PD parameters is reported. |
| PGx | Guo_1997 | not_relevant | 0 | 5 | Study examines orphenadrine as an inhibitor of CYP enzymes in vitro, not any gene variant/genotype effect on orphenadrine PK/PD. |
| PGx | Hamaoka_2001 | not_relevant | 0 | 0 | Orphenadrine is only used as a chemical inhibitor of CYP3A in vitro, not as a drug with a reported pharmacogenomic PK/PD effect. |
| PGx | Heyn_1996 | not_relevant | 0 | 0 | Orphenadrine appears only as a CYP2B inhibitor in vitro; no gene/genotype effect on orphenadrine PK/PD is reported. |
| PGx | Hijazi_2002 | not_relevant | 0 | 0 | Orphenadrine appears only as a chemical inhibitor of CYP2B6 in an in vitro ketamine metabolism study, with no gene variant/genotype effect on orphenadrine PK/PD. |
| popPK | Knittel_2015 | irrelevant | 0 | 4 | Orphenadrine appears only as a co-intoxicant with a single postmortem blood concentration (0.06 mg/L), not as a subject of any kinetic parameter study. |
| PGx | Kobayashi_1999 | not_relevant | 0 | 3 | Orphenadrine is used only as a CYP2B6 inhibitor probe; no gene variant effect on orphenadrine PK/PD is reported. |
| popPK | Lee_2006 | irrelevant | 1 | 0 | Orphenadrine appears only as a CYP2B1/2 inducer pretreatment in an omeprazole PK study in rats; all kinetic parameters belong to omeprazole, not orphenadrine. |
| PGx | Li_1997 | not_relevant | 0 | 0 | Orphenadrine is only mentioned as a CYP2B6 inhibitor control; no gene variant effect on orphenadrine PK/PD is reported. |
| PGx | Li_2009 | not_relevant | 0 | 0 | Orphenadrine only appears as a non-CYP3A4 inhibitor of LIPA metabolism; no gene variant/genotype effect on orphenadrine PK/PD is reported. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | Study reports drug-drug inhibition of opioid metabolism by orphenadrine (DDI), not a pharmacogenomic variant effect on orphenadrine's PK/PD. |
| popPK | Nemec_2010 | irrelevant | 0 | 0 | Orphenadrine appears only as an infusion vehicle component; no kinetic parameters for it are reported. |
| PGx | Oda_2001 | not_relevant | 0 | 0 | Orphenadrine is used only as a CYP2B6 chemical inhibitor; no pharmacogenomic effect on orphenadrine's own PK/PD is reported. |
| PGx | Pegolo_2010 | not_relevant | 1 | 5 | Orphenadrine is only used as a CYP2B inhibitor in an in vitro enzyme study; no gene variant/genotype effect on orphenadrine PK/PD is reported. |
| PGx | Ren_1997 | not_relevant | 0 | 0 | Orphenadrine is used only as a chemical inhibitor of CYP metabolism; no gene variant/genotype effect on orphenadrine PK/PD is reported. |
| PGx | Royer_1996 | not_relevant | 1 | 5 | Orphenadrine is only an in vitro CYP3A inhibitor of docetaxel metabolism; no gene variant/genotype effect on orphenadrine PK/PD is reported. |
| popPK | Saano_1990 | irrelevant | 0 | 0 | Orphenadrine is only a co-administered interacting drug; kinetic parameters belong to paracetamol, not to orphenadrine itself. |
| PGx | Sai_2000 | not_relevant | 0 | 0 | Orphenadrine is only used as a chemical CYP inhibitor; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Scheers_2001 | irrelevant | 3 | 2 | This is an in vitro cytotoxicity (PI50/EC50) study on Hep G2 cells, not a toxicokinetic study; orphenadrine's values are cytotoxicity endpoints, not kinetic parameters, and no numeric values for orphenadrine are shown in the evidence. |
| PGx | Skaanild_2002 | not_relevant | 1 | 2 | Orphenadrine is only used as a CYP2B inhibitor in pig microsomes; no gene variant/genotype effect on orphenadrine PK/PD is reported. |
| popPK | Stanko_1990 | irrelevant | 2 | 0 | A narrative review with discussion of pharmacokinetics but no numeric kinetic parameter values for orphenadrine appear in the evidence. |
| PGx | Stevens_1997 | not_relevant | 0 | 0 | Orphenadrine is used only as a chemical inhibitor of RP 73401 metabolism; no gene variant affects orphenadrine PK/PD. |
| PGx | Svensson_1999 | not_relevant | 2 | 7 | Orphenadrine is used only as a CYP2B6 chemical inhibitor in vitro for artemisinin metabolism; no pharmacogenomic effect of a gene variant on orphenadrine's PK/PD is reported. |
| PGx | Wang_1999 | not_relevant | 0 | 0 | Orphenadrine is only used as a CYP2B6 phenotyping probe substrate; no variant/genotype effect on orphenadrine PK/PD is reported. |
| PGx | Yamazaki_1999 | not_relevant | 1 | 3 | Orphenadrine is used only as a CYP2B6 inhibitor probe against nicotine metabolism; no variant effect on orphenadrine PK/PD is reported. |
| popPK | Yanagihara_2001 | irrelevant | 0 | 0 | Orphenadrine appears only as a CYP2B6 inhibitor reagent in ketamine experiments; all kinetic parameters belong to ketamine, not orphenadrine. |
| PGx | Yanagihara_2001 | not_relevant | 0 | 0 | Orphenadrine is only used as a CYP2B6 inhibitor for ketamine; no gene variant effect on orphenadrine PK/PD reported. |
| popPK | Yang_2008 | irrelevant | 0 | 1 | Orphenadrine is only a CYP inducer pretreatment; all kinetic parameters belong to theophylline in rats. |
| popPK | Yang_2008_2 | irrelevant | 0 | 0 | Orphenadrine appears only as a CYP2B inducer/pretreatment reagent; all kinetic parameters (clearance changes) belong to ondansetron in rats, not orphenadrine. |
| popPK | Yang_2009 | irrelevant | 0 | 0 | Orphenadrine citrate appears only as a CYP inducer pretreatment; the kinetic parameters reported (clearances) belong to furosemide, not orphenadrine. |
| popPK | Zhu_2024 | irrelevant | 0 | 0 | This is a tizanidine review; orphenadrine appears only as a comparator/safety mention, all kinetic parameters (half-life, bioavailability) belong to tizanidine, not orphenadrine. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | Orphenadrine only mentioned re Alzheimer's risk; no pharmacogenomic PK/PD effect reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Borphenadrine%5D&body=Drug%3A%20orphenadrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_orphenadrine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 10:20 UTC</sub>
