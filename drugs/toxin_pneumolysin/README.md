<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Pneumolysin&quot;}]"></div>

# Pneumolysin

- **generic name:** Pneumolysin
- **T3DB:** [T3D2620](http://www.t3db.ca/toxins/T3D2620) · **PubChem:** none

## About

Pneumolysin (PLY) is the cytolysin produced by Streptococcus pneumoniae and is a key virulence factor. The protein contains 471 amino acids and four structural domains. Pneumolysin belongs to a family of protein toxins known as the 'thiol-activated cytolysins'. It is a member of a large family of highly conserved, cholesterol binding toxins. …

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** ingestion, inhalation, dermal
- **Sources and uses:** Pneumolysin (PLY) is the cytolysin produced by Streptococcus pneumoniae and is a key virulence factor.
- **Mechanism of toxicity:** Pneumolysin binds to cholesterol the undergoes oligomerization and membrane pore formation. Pneumolysin also activates the classical pathway of complement. …
- **Health effects:** Pneumolysin is hemolytic and cytolytic. Cytolytic effects contribute to lung injury and neuronal damage while proinflammatory effects compound tissue damage. …
- **Acute toxicity:** LD50: 1.5 ug/mg (Intravenous, Rabbit)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2620">T3DB T3D2620</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 13:52 | 43:10 | 0/0/0 | 0/0/0 | 0/0/0 | 826,879/25,689 | ollama / glm-5.3-flash | 36 | 4/32 | 36/0 | 0 |

## Coverage

- **PubMed hits:** 111 matched, 104 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2026.pdf` | Yu Y et al., ΔA146Ply exerts anti-triple-negative br…, Toxicology and applied phar… (2026) | pgx | 5 | [10.1016/j.taap.2026.118025](https://doi.org/10.1016/j.taap.2026.118025) | [42669384](https://www.ncbi.nlm.nih.gov/pubmed/42669384) | metadata signals extractable PGX data (CYP24A1) |

<sub>queue written 2026-11-11 13:50 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2024 | irrelevant | 0 | 0 | Mechanistic pathogenesis study of pneumococcal infection in mice with no kinetic parameters (no half-life, clearance, partition coefficients or model) for pneumolysin. |
| popPK | Alcantara_1999 | irrelevant | 1 | 1 | This is a bacteremia clearance/outcome study in rats measuring pneumococcal CFU changes, not kinetic parameters of pneumolysin itself; no pneumolysin disposition parameter values are reported. |
| popPK | Alcantara_2001 | irrelevant | 1 | 0 | This is an in vivo infection/outcome study measuring complement (CH50, C3) and bacterial clearance, with no kinetic parameters (half-life, clearance, rate constants) for pneumolysin itself and no numeric toxin kinetic values present. |
| popPK | Amaral_2015 | irrelevant | 0 | 0 | Paper reports mRNA ΔG manipulation and PLY expression levels in S. pneumoniae cultures, not any toxicokinetic parameter (half-life, clearance, partitioning) of pneumolysin in an organism. |
| PGx | Babb_2016 | not_relevant | 0 | 0 | Vaccine immunogenicity study with no gene variant effects on PK/PD parameters. |
| popPK | Beentjes_2026 | irrelevant | 0 | 0 | This is an immunology/transmission study; pneumolysin appears only as a bacterial virulence factor (haemolytic activity, Treg induction), with no toxicokinetic parameters of pneumolysin reported. |
| popPK | Berry_1989 | irrelevant | 1 | 1 | A virulence study comparing pneumolysin-negative mutants with wild-type bacteria in mice; the blood clearance refers to bacterial clearance, not toxicokinetic parameters of pneumolysin itself, and no numeric kinetic values for pneumolysin appear in the evidence. |
| popPK | Bewley_2014 | irrelevant | 1 | 1 | This is a cell biology/mechanism study of pneumolysin's role in macrophage apoptosis with no toxicokinetic parameters (no half-life, clearance, partition coefficients, etc.); the few numbers are experimental time points, not kinetic parameters. |
| PGx | Blumental_2015 | not_relevant | 1 | 1 | Paper describes pneumolysin gene allele distribution among pneumococcal isolates for epidemiology/vaccine targets, not a host gene variant effect on a PK/PD parameter of pneumolysin as a drug. |
| popPK | Brumshagen_2012 | irrelevant | 0 | 0 | An immunology/injury study in mice with no toxicokinetic parameters for pneumolysin. |
| popPK | Cabrera_2011 | irrelevant | 0 | 0 | The paper is about mastoparan peptides interacting with model lipid vesicles; pneumolysin does not appear at all and no toxicokinetic parameters are reported. |
| PGx | Cho_2019 | not_relevant | 0 | 0 |  |
| popPK | Cojocel_1984 | irrelevant | 0 | 0 | The study concerns egg-white lysozyme in rats, with no pneumolysin kinetic parameters at all. |
| popPK | Cojocel_1984_2 | irrelevant | 0 | 0 | The kinetic parameters (reabsorption, accumulation, degradation rates) belong to egg-white lysozyme, not pneumolysin; "PLY" here denotes lysozyme plasma concentration. |
| popPK | Cuypers_2020 | irrelevant | 0 | 0 | In vitro mechanistic study of neutrophil activation by pneumolysin with no kinetic parameters (no half-life, clearance, rate constants, or disposition model) for pneumolysin. |
| popPK | Czikora_2014 | irrelevant | 1 | 1 | Mechanistic study of ENaC/TNF signaling; pneumolysin is a co-exposure tool with no toxicokinetic parameters for it. |
| popPK | Daigneault_2012 | irrelevant | 0 | 0 | Immunology paper on T-cell death mechanisms; pneumolysin's role is cytotoxicity/apoptosis, with no kinetic parameters (no half-life, clearance, rate constants), and quantitative data live in figures/supplement not provided. |
| PGx | Das_2014 | not_relevant | 0 | 0 | This paper studies MIF gene effects on pneumococcal clearance, not a PK or PD parameter of a drug. |
| popPK | Davis_2011 | irrelevant | 0 | 0 | Pneumolysin appears only as a mechanistic virulence factor in pneumococcal clearance studies; no kinetic parameters (half-life, clearance, rates, partitioning) for pneumolysin are reported. |
| popPK | Dimitriou_2009 | irrelevant | 0 | 0 | Paper concerns platelet integrin peptides in vitro; pneumolysin is not mentioned and no kinetic parameters are reported. |
| popPK | Evans_2012 | irrelevant | 0 | 0 | This is a bacterial infection model (LD50, bacterial counts) in Galleria mellonella larvae; pneumolysin appears only as a virulence factor, with no kinetic parameters of pneumolysin disposition. |
| popPK | Fickl_2007 | irrelevant | 0 | 0 | An in vitro neutrophil activation study with metal ions as focus; pneumolysin is a comparator stimulus with no kinetic parameters of disposition. |
| popPK | Fliegauf_2013 | irrelevant | 3 | 2 | Not a toxicokinetic study — it is a mucociliary clearance mechanistic study in mouse tracheal cultures with no kinetic parameters (half-life, clearance, rate constants) for pneumolysin. |
| popPK | Ganpule_2022 | irrelevant | 1 | 2 | In vitro cell-membrane mechanism study with no kinetic parameters (half-life, clearance, rate constants, partition coefficients) for pneumolysin's disposition; key values (HD50, time-course data) only in figures/supplements not provided. |
| popPK | Gelber_2008 | irrelevant | 0 | 0 | Pneumolysin appears only as a functional comparator (mutation of its undecapeptide) with no kinetic parameters of any kind. |
| popPK | Giebink_1999 | irrelevant | 0 | 0 | Review of the chinchilla otitis media model mentioning pneumolysin only qualitatively, with no toxicokinetic parameters or numeric values. |
| popPK | Gil_2022 | irrelevant | 1 | 1 | A narrative review of pneumococcal complement evasion with no kinetic parameters for pneumolysin; only qualitative immune mechanisms. |
| PGx | Gil_2022 | not_relevant | 0 | 0 | This paper covers pneumolysin from the perspective of complement evasion by Streptococcus pneumoniae, not as a therapeutic agent with PK/PD parameters affected by host or pathogen genetic variants. |
| popPK | Gilbert_2010 | irrelevant | 0 | 0 | A narrative review of CDC mechanism of action with no toxicokinetic parameters of any kind for pneumolysin. |
| popPK | Gomiero_2019 | irrelevant | 0 | 0 | This is a microplastic biomonitoring study in mussels; pneumolysin is nowhere mentioned and no kinetic parameters for it exist. |
| popPK | Goulart_2020 | irrelevant | 0 | 0 | This is a vaccine immunogenicity/bacterial-clearance study in mice; pneumolysin (PdT) appears only as an antigen, with no toxicokinetic parameter (no half-life, clearance, partition coefficient, etc.) of pneumolysin measured or reported. |
| popPK | Gray_2014 | irrelevant | 0 | 0 | Immunology study of pneumolysin as a T-cell stimulus with no toxicokinetic parameters of any kind. |
| PGx | Greene_2015 | not_relevant | 0 | 0 | Study examines bacterial murMN mutations affecting pneumolysin release, not host gene variants altering PK/PD of a drug. |
| popPK | Ha_2007 | irrelevant | 0 | 0 | This is a mechanistic signaling study (MUC5AC induction by pneumolysin) with no toxicokinetic parameters of any kind. |
| popPK | Hirst_2000 | irrelevant | 1 | 2 | This is an in vitro ciliary-beat toxicity study with no kinetic parameters (half-life, clearance, rates, partitioning) for pneumolysin. |
| popPK | Hirst_2002 | irrelevant | 1 | 3 | In vitro cytotoxicity (IC50/pIC50) dose–response study of pneumolysin on cell lines, not a toxicokinetic parameter (no half-life, clearance, rate constants, partitions, or disposition model); numeric pIC50 values are present but not kinetic. |
| popPK | Hirst_2004 | irrelevant | 0 | 0 | This is a review of pneumolysin's pathogenic role with no quantitative kinetic parameters of any kind. |
| popPK | Johnson_1977 | irrelevant | 1 | 0 | In vitro mechanistic study of haemolysis binding/lysis; no toxicokinetic parameters (no half-life, clearance, rate constants or partition coefficients) for pneumolysin. |
| popPK | Johnson_1990 | irrelevant | 0 | 0 | A virulence study in rabbit ocular infection with no kinetic parameters of any kind. |
| popPK | Kuipers_2018 | irrelevant | 1 | 1 | This is a mouse colonization/immunology study of pneumolysin's role in pneumococcal clearance; no toxicokinetic parameters (half-life, clearance rate, partition coefficients, etc.) for pneumolysin are reported, only colonization densities and cytokine/treatment effects. |
| popPK | Laresser_2024 | irrelevant | 0 | 0 | This paper is about mechanical bending tests of carbon-fiber composite materials and contains no toxicokinetic data on pneumolysin. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | This is a vaccine immunogenicity study in mice; pneumolysin appears only as a conjugate carrier with no kinetic parameters of any kind. |
| popPK | Lee_2001 | irrelevant | 1 | 0 | Pneumolysin is used only as a vaccine antigen/DNA immunogen; bacterial blood clearance and antibody titers are immune outcomes, not toxicokinetic parameters of pneumolysin. |
| popPK | Lee_2001_2 | irrelevant | 0 | 0 | Immunogenicity study; pneumolysin is a vaccine carrier, no kinetic parameters for pneumolysin. |
| popPK | Lee_2003 | irrelevant | 0 | 0 | Immunogenicity/efficacy study of pneumococcal conjugate vaccines in mice with no kinetic parameters for pneumolysin. |
| popPK | Lemon_2015 | irrelevant | 0 | 0 | No toxicokinetic parameters of pneumolysin; this is a cell biology mechanism study in murine macrophages measured by ELISA/microscopy, not kinetic parameter values — none appear even in figures. |
| popPK | Lemon_2015_2 | irrelevant | 0 | 0 | Pneumolysin appears only as a virulence mechanism in an immunology/outcome study with no kinetic parameters; no numeric toxicokinetic values are present. |
| popPK | Li_2015 | irrelevant | 0 | 0 | An in vitro A549 autophagy-signaling study; no toxicokinetic parameters (half-life, clearance, partitioning, etc.) for pneumolysin are reported. |
| popPK | Li_2023 | irrelevant | 0 | 0 | This is an epidemiological carriage/vaccination-coverage study with no kinetic parameters for pneumolysin (ply appears only as a virulence gene). |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a molecular microbiology study of lysine crotonylation regulating pneumolysin virulence; no quantitative toxicokinetic parameters (half-life, clearance, partitioning, etc.) for pneumolysin are reported, in text or supplement. |
| popPK | Lokken-Toyli_2024 | irrelevant | 0 | 0 | Pneumolysin appears only as a knockout-comparison virulence factor in a pneumococcal infection study; no kinetic parameters for pneumolysin are reported. |
| popPK | Lu_2010 | irrelevant | 0 | 0 | A vaccine immunogenicity/protection study with no kinetic parameters for pneumolysin; it only mentions a nonhemolytic pneumolysin-expressing vaccine strain. |
| PGx | Lucas_2012 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on PK/PD parameters of pneumolysin are reported; study concerns a GHRH agonist intervention. |
| popPK | Lv_2021 | irrelevant | 0 | 0 | In vitro study of a different substance (ABBA) acting on pneumolysin activity; no toxicokinetic parameters for pneumolysin in humans or animals. |
| popPK | Majhi_2014 | irrelevant | 0 | 0 | The paper reports inflammation and gene expression outcomes in infected mice with no kinetic parameters (half-life, clearance, rate constants) for pneumolysin itself. |
| popPK | Malley_2012 | irrelevant | 0 | 0 | Vaccine immunology paper with no kinetic parameters for pneumolysin; pneumolysin appears only as a vaccine component. |
| PGx | Malley_2012 | not_relevant | 0 | 0 | Paper describes pneumococcal вакци vaccine immunogenicity; no host gene variant effects on pneumolysin PK/PD parameters reported. |
| popPK | Marks_2007 | irrelevant | 0 | 0 | No kinetic parameters for pneumolysin; it appears only via a deficient mutant in a pneumonia pathogenesis study. |
| popPK | Marriott_2008 | irrelevant | 0 | 0 | A narrative review of pneumolysin's biology with no kinetic parameters or numeric values of any kind. |
| popPK | Matthias_2008 | irrelevant | 1 | 0 | Immunology study of pneumolysin's role in neutrophil lysis and antigen delivery in mice with no quantitative toxicokinetic parameters or numeric values present. |
| popPK | Maus_2007 | irrelevant | 1 | 0 | This is an inflammatory mechanism/outcome study of pneumolysin challenge in mice with no kinetic parameters (no half-life, clearance, rates, or concentrations over time) reported; no numeric values present. |
| popPK | Michno_2025 | irrelevant | 0 | 0 | This is an autophagy/immunology study of pneumococcal clearance in zebrafish larvae with no toxicokinetic parameters (no half-life, clearance, partition coefficients, or disposition model) for pneumolysin. |
| popPK | Mitchell_1997 | irrelevant | 0 | 0 | Review-style description of pneumolysin's biological properties with no kinetic parameters, no numeric values, and no species-specific toxicokinetic data. |
| popPK | Mochan-Keef_2015 | irrelevant | 2 | 2 | This is an in-host bacterial infection (ODE) model where pneumolysin is only a virulence factor; the parameters are host immune/bacterial clearance rates, not toxicokinetic parameters of pneumolysin itself, and the numeric distributions appear only in figures/Tables not included. |
| popPK | Mureithi_2009 | irrelevant | 0 | 0 | This is a human immunology/carriage study with no toxicokinetic parameters for pneumolysin; pneumolysin is only an in vitro antigen stimulus. |
| popPK | Nakamura_2011 | irrelevant | 0 | 0 | No quantitative toxicokinetic parameters for pneumolysin; pneumolysin appears only as a virulence factor in an immunology/coinfection study, with values in figures not provided. |
| popPK | Neralla_2004 | irrelevant | 0 | 0 | Pneumolysin is only mentioned once as a virulence factor; no kinetic parameters for it are reported. |
| popPK | Ng_1997 | irrelevant | 1 | 0 | This is a dose-response virulence/inflammation study in rats with no kinetic parameters (half-life, clearance, rates, etc.) reported for pneumolysin. |
| popPK | Nguyen_2014 | irrelevant | 0 | 0 | No kinetic parameters for pneumolysin are reported; the study measures cytokines and bacterial clearance, not disposition/toxicokinetics. |
| popPK | Odutola_2017 | irrelevant | 0 | 0 | Vaccine efficacy/immunogenicity trial; pneumolysin is a vaccine antigen, no kinetic parameters of any kind are reported. |
| popPK | Parker_2011 | irrelevant | 0 | 0 | Immunology study of pneumolysin's role in IFN-β signaling; no kinetic parameters (half-life, clearance, etc.) for pneumolysin are reported, only bacterial CFU counts and cytokine fold-changes. |
| popPK | Periselneris_2022 | irrelevant | 1 | 1 | An immunology/inflammation study of pneumolysin's effect on macrophage cytokine responses; no kinetic parameters (half-life, clearance, Vd, rate constants) are reported, only cytokine levels and CFU in figures not fully provided. |
| popPK | Pinho-Ribeiro_2023 | irrelevant | 0 | 0 | Neuroimmunology study of pneumolysin's toxin action, with no toxicokinetic parameters (no half-life, clearance, rate constants, etc.) for pneumolysin. |
| popPK | Propst-Graham_2007 | irrelevant | 0 | 0 | This is an immunology/host-defense study of pneumococcal killing in cirrhotic rats; pneumolysin is a virulence factor comparator, with no kinetic (half-life, clearance, partition, etc.) parameters of pneumolysin; numbers present relate to ciliary beat, lysozyme and C3, not pneumolysin disposition (and some results in figures not shown). |
| popPK | Qi_2021 | irrelevant | 0 | 0 | In vitro study of a pneumolysin inhibitor (betulin) with no toxicokinetic parameters for pneumolysin; data are cellular assay results, not disposition kinetics. |
| popPK | Quin_2007 | irrelevant | 1 | 1 | Pneumolysin is studied as a bacterial virulence factor affecting complement deposition and bacterial clearance, not as a substance with toxicokinetic parameters; no half-life, clearance, partition or model of pneumolysin itself is reported. |
| popPK | Ramos-Sevillano_2015 | irrelevant | 0 | 0 | This is a mechanistic immunology study of LytA and pneumolysin effects on complement; no toxicokinetic parameters of pneumolysin are reported, only qualitative virulence findings in a murine infection model. |
| popPK | Riegler_2019 | irrelevant | 0 | 0 | This is an immunology/colonization study of pneumolysin-mediated necroptosis in mice with no toxicokinetic parameters (no half-life, clearance, partition coefficients, etc.) for pneumolysin. |
| popPK | Rubins_1998 | irrelevant | 0 | 0 | This is a descriptive/vaccine-focused review of pneumolysin's virulence mechanisms with no kinetic parameters of any kind. |
| PGx | Sanchez_2011 | not_relevant | 0 | 0 | Study of pneumococcal biofilm virulence factor expression; no gene variant effect on PK/PD parameters of a drug reported. |
| popPK | Saralahti_2014 | irrelevant | 0 | 0 | This is an infection pathogenesis study; pneumolysin appears only as a knockout mutant comparator with no kinetic parameters of any kind. |
| popPK | Sarker_1998 | irrelevant | 1 | 0 | Pneumolysin (PLY) is merely a fluorescent permeability tracer co-applied with histamine; no kinetic parameters (half-life, clearance, partition coefficients) for pneumolysin itself are reported. |
| popPK | Shin_2010 | irrelevant | 0 | 0 | Mechanistic signaling/chemokine study with no kinetic parameters for pneumolysin. |
| popPK | Shizukuishi_2024 | irrelevant | 0 | 0 | Mechanistic cell biology study of Ply membrane-disrupting activity with no toxicokinetic parameters (no half-life, clearance, or disposition values) for pneumolysin. |
| popPK | Smith_1996 | irrelevant | 0 | 0 | The paper measures pulmonary clearance kinetics of 99mTc-DTPA aerosol (a tracer) in horses, not of pneumolysin, which does not appear at all. |
| popPK | Subramanian_2020 | irrelevant | 1 | 1 | This is a toxin-neutralization/therapeutic study (MRC-1 peptides, nanoparticles) with only in vitro dose-response and infection outcome data; no kinetic parameters (half-life, clearance, partitioning, rate constants) for pneumolysin are reported, and the numeric values (ED50 etc.) appear in appendix tables not provided. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | This is a mechanism/pharmacology study of the herbal medicine QFY in pneumolysin-stimulated cells and S. pneumoniae-infected mice; PLY appears only as a stimulus, with no kinetic parameters (half-life, clearance, etc.) reported. |
| popPK | Surve_2018 | irrelevant | 0 | 0 | Cell biology study of pneumolysin's role in bacterial autophagic clearance and BBB transcytosis; no kinetic parameters of pneumolysin itself and no numeric values present. |
| popPK | Syed_2020 | irrelevant | 0 | 0 | Review of streptococcal-complement interactions with no kinetic parameters for pneumolysin; it appears only as a virulence factor mention. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | Mechanistic study of Qingfei Yin on autophagy/necroptosis with no toxicokinetic parameters for pneumolysin. |
| popPK | Trzciński_2008 | irrelevant | 0 | 0 | An immune-protection study with no kinetic parameters for pneumolysin; pneumolysin is only a vaccine antigen component. |
| popPK | Vernatter_2013 | irrelevant | 0 | 0 | Review of pneumococcal pathogenesis with no kinetic parameters for pneumolysin. |
| popPK | Vögele_2019 | irrelevant | 1 | 1 | Molecular dynamics study of pneumolysin pore formation in membranes; no in vivo toxicokinetic parameters (half-life, clearance, partition coefficients), and any quantitative details live in simulation/SI figures not extracted. |
| popPK | Watt_2025 | irrelevant | 0 | 0 | In vitro drug-delivery study with no kinetic parameters measured in humans or animals. |
| popPK | Wu_2010 | irrelevant | 0 | 0 | A vaccine efficacy study in mice with immunogenic pneumolysin mutant; no toxicokinetic parameters of pneumolysin are reported. |
| popPK | Xu_2015 | irrelevant | 0 | 0 | This is a vaccine efficacy/immunology study in mice; pneumolysin appears only as a detoxified vaccine component with no kinetic parameters of any kind. |
| popPK | Yang_2010 | irrelevant | 1 | 0 | This is a TNF/pulmonary edema review; pneumolysin is mentioned as a virulence toxin but no toxicokinetic parameter of pneumolysin is reported, and no numeric PLY kinetic values appear in the evidence. |
| popPK | Yasuda_2007 | irrelevant | 0 | 0 | Pneumolysin is only a measured bacterial virulence protein, not the subject of any kinetic parameter; roxithromycin is the study drug (mouse data). |
| popPK | Yoo_2010 | irrelevant | 0 | 0 | In vitro cellular cytokine-expression study with no kinetic parameters for pneumolysin. |
| PGx | Yu_2026 | not_relevant | 1 | 1 | Papers describes pneumolysin variant as anti-tumor agent; no gene variant effect on PK/PD parameters reported. |
| popPK | Zou_2017 | irrelevant | 0 | 0 | The study examines cytokine (IL-8/IP-10) induction by PepO in vitro in BEAS-2B cells; pneumolysin is only mentioned in the background and no kinetic parameters (half-life, clearance, rate constants, etc.) for any substance are reported. |
| popPK | Zou_2023 | irrelevant | 0 | 0 | This is an efficacy/inhibition study of isorhamnetin against pneumolysin, with no kinetic parameters (half-life, clearance, partitioning, etc.) for PLY reported in the evidence. |
| popPK | van_2005 | irrelevant | 0 | 0 | This is a murine colonization clearance study with no quantitative toxicokinetic parameters for pneumolysin; pneumolysin appears only as a bacterial virulence factor, not as the subject of kinetic measurements. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpneumolysin%5D&body=Drug%3A%20pneumolysin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pneumolysin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
