<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Chloramphenicol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Chloramphenicol_Wu2022_reference&quot;,&quot;label&quot;:&quot;Wu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_chloramphenicol/Chloramphenicol_Wu2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# Chloramphenicol

- **generic name:** Chloramphenicol
- **T3DB:** [T3D3954](http://www.t3db.ca/toxins/T3D3954) · **DrugBank:** [DB00446](https://go.drugbank.com/drugs/DB00446) · **PubChem:** [CID 298](https://pubchem.ncbi.nlm.nih.gov/compound/298)
- **groups:** approved, vet_approved, withdrawn

## About

An antibiotic first isolated from cultures of <i>Streptomyces venequelae</i> in 1947 but now produced synthetically. It has a relatively simple structure and was the first broad-spectrum antibiotic to be discovered. It acts by interfering with bacterial protein synthesis and is mainly bacteriostatic. (From Martindale, The Extra Pharmacopoeia, 29th ed, p106)

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** rapidly and completely absorbed from gastrointestinal tract following oral administration (bioavailability 80%). Well absorbed following intramuscular administration (bioavailability 70%). Intraocular and some systemic absorption also occurs after topical application to the eye.
- **Sources and uses:** Used in treatment of cholera, as it destroys the vibrios and decreases the diarrhea. It is effective against tetracycline-resistant vibrios. …
- **Mechanism of toxicity:** Chloramphenicol targets the large 39S subunit of the mitochondrial ribosome thereby deactivation mitochondrial protein synthesis. As a result chloramphenicol is cytotoxic to the most metabolically active cells or tissues including the heart, liver, thymus and bone-marrow.. The likely target of chloramphenicol is the 16S rRNA molecule in the mitochondrial ribosome, which is analogous to the 23S rRNA in bacterial ribosomes.
- **Health effects:** The most serious adverse effect associated with chloramphenicol treatment is bone marrow toxicity, which may occur in two distinct forms: 1) bone marrow suppression, which is a direct toxic effect of the drug and is usually reversible, and 2) aplastic anemia, which is idiosyncratic (rare, unpredictable) and generally fatal. Other less serious reactions from chloramphenicol use include fever, rashes, headache, and confusion. …
- **Carcinogenicity:** IARC group 2A, probably carcinogenic to humans.
- **Acute toxicity:** Oral, mouse: LD50 = 1500 mg/kg
Oral, rat: LD50 = 2500 mg/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3954">T3DB T3D3954</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 56-75-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17698">ChEBI 17698</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloramphenicol | parent | 323.13 | C11H12Cl2N2O5 | PubChem | [298](https://pubchem.ncbi.nlm.nih.gov/compound/298) | Song_2010 |

## Start here

> **Wu_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> review reference. [Run it in the simulator](drugs/toxin_chloramphenicol/Chloramphenicol_Wu2022_reference.md?tab=Simulation) · [record](drugs/toxin_chloramphenicol/Chloramphenicol_Wu2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Song_2010 · CL ·/kg</text><circle cx="415.4" cy="30.0" r="4" fill="#ef6c00"><title>Song_2010 · CL ·/kg: 4406 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wu_2022 · CL ·/kg</text><circle cx="415.4" cy="46.0" r="4" fill="#78909c"><title>Wu_2022 · CL ·/kg: 4406 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wu_2022_reference](drugs/toxin_chloramphenicol/Chloramphenicol_Wu2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wu Y et al., Measurement of Pharmacokinetics and Tis…, Journal of analytical metho… (2022) | [10.1155/2022/5297603](https://doi.org/10.1155/2022/5297603) |
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Song_2010_reference](drugs/toxin_chloramphenicol/Chloramphenicol_Song2010_reference.md) | held back | 1-compartment, IV | 2 | Song C et al., Transmembrane distribution of kanamycin…, Molecular bioSystems (2010) | [10.1039/b921810f](https://doi.org/10.1039/b921810f) |
| <span class="pk-rf" hidden data-species="goat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ashara_2017_reference](drugs/toxin_chloramphenicol/Chloramphenicol_Ashara2017_reference.md) | — | 1-compartment (no model) | 0 | Ashara KC et al., Association of Permeability and Lipid C…, Folia medica (2017) | [10.1515/folmed-2017-0019](https://doi.org/10.1515/folmed-2017-0019) |
| <span class="pk-rf" hidden data-species="fish" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Cravedi_1985_reference](drugs/toxin_chloramphenicol/Chloramphenicol_Cravedi1985_reference.md) | — | 1-compartment (no model) | 0 | Cravedi JP et al., Disposition and metabolism of chloramph…, Xenobiotica; the fate of fo… (1985) | [10.3109/00498258509045341](https://doi.org/10.3109/00498258509045341) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chloramphenicol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CD55 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 04:15 | 26:18 | 2/2/0 | 0/0/0 | 0/0/0 | 789,746/70,026 | ollama / glm-5.3-flash | 37 | 6/15 | 37/0 | 0 |

## Coverage

- **PubMed hits:** 506 matched, 158 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cravedi_1985.pdf` | Cravedi JP et al., Disposition and metabolism of chloramph…, Xenobiotica; the fate of fo… (1985) | popPK | 9 | [10.3109/00498258509045341](https://doi.org/10.3109/00498258509045341) | [4002733](https://pubmed.ncbi.nlm.nih.gov/4002733) | Quantitative excretion, tissue distribution and metabolite fractions for chloramphenicol in trout are given directly in the abstract. |
| `Song_2010.pdf` | Song C et al., Transmembrane distribution of kanamycin…, Molecular bioSystems (2010) | popPK | 9 | [10.1039/b921810f](https://doi.org/10.1039/b921810f) | [20563323](https://pubmed.ncbi.nlm.nih.gov/20563323) | Quantitative kinetic parameter for chloramphenicol itself — a membrane partition coefficient (14.20 ± 0.94 µL per embryo) with internal distribution — is fully reported for zebrafish embryos. |

<sub>queue written 2026-11-13 04:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arraiano_1988 | not_relevant | 1 | 3 | E. coli mRNA decay study; chloramphenicol only appears as the cat gene marker, no pharmacokinetic/pharmacodynamic effect reported. |
| PGx | Atsumi_2010 | not_relevant | 1 | 1 | Paper concerns bacterial mutations affecting isobutanol tolerance in E. coli; chloramphenicol sensitivity is only mentioned qualitatively, with no gene effect on chloramphenicol PK/PD parameters. |
| popPK | Aït-Aïssa_2000 | irrelevant | 0 | 0 | Chloramphenicol appears only as an analytical reporter (chloramphenicol acetyltransferase gene); no toxicokinetic parameters for chloramphenicol itself are reported. |
| PGx | Banerjee_2019 | not_relevant | 2 | 1 | Study is a metabolic flux model of antibiotic resistance in C. violaceum; no gene variant/genotype effect on chloramphenicol PK (e.g., clearance, AUC) or patient PD parameters is reported. |
| popPK | Bartzatt_2003 | irrelevant | 1 | 5 | The paper is a medicinal-chemistry drug design study; only a computed/measured log P (0.854) for chloramphenicol appears — a chemical property, not in vivo toxicokinetic parameters. |
| popPK | Beekman_1991 | irrelevant | 0 | 0 | Chloramphenicol appears only as part of the CAT reporter enzyme, with no kinetic parameters measured for chloramphenicol itself. |
| PGx | Beschle_1984 | not_relevant | 0 | 0 | Study identifies a bacterial chloramphenicol acetyltransferase gene; no host gene variant effect on chloramphenicol PK/PD parameters is reported. |
| popPK | Bouzammit_2025 | irrelevant | 0 | 0 | Chloramphenicol appears only as a positive-control comparator in antibacterial assays; no toxicokinetic parameters for it are reported. |
| PGx | Broadway-Duren_2026 | not_relevant | 2 | 3 | Chloramphenicol is only listed as a hemolysis-triggering drug in G6PD deficiency; no PK/PD parameter change for chloramphenicol is reported or quantified (case concerns rasburicase). |
| popPK | Brox_2016 | relevant | 4 | 2 | Chloramphenicol is one of the 17 studied compounds with uptake kinetics in zebrafish embryos, but per-compound numeric values for it are not shown in the abstract; only pooled rate ranges and qualitative statements (efflux transporter affinity) appear, likely in a table/figure not provided. |
| PGx | Cascio_2002 | not_relevant | 0 | 0 | Compares antibiotics clinically; no gene variant/genotype effect on chloramphenicol PK/PD reported. |
| PGx | Choudhry_1990 | not_relevant | 2 | 3 | Reports G6PD deficiency-associated hemolysis with chloramphenicol but no PK/PD parameter or effect size is given. |
| popPK | Chu_2023 | irrelevant | 1 | 1 | This is an exposure/epidemiological outcome study measuring urinary antibiotic concentrations; the only half-life mention (~40 h, azithromycin) is cited, not measured, and no chloramphenicol-specific kinetic parameter is reported. |
| PGx | Cilleros-Holgado_2025 | not_relevant | 0 | 0 | Chloramphenicol is only used as an experimental mimic of mitochondrial translation defect; no gene variant effect on chloramphenicol PK/PD parameters is reported. |
| PGx | Crowell_1984 | not_relevant | 1 | 1 | Paper only notes chloramphenicol therapy was not related to G6PD activity depression; no gene-variant effect on chloramphenicol PK/PD parameters reported. |
| PGx | Curtis_1997 | not_relevant | 0 | 0 | Chloramphenicol appears only as a CAT reporter assay reagent (chloramphenicol acetyltransferase), not as a drug with PK/PD effects of gene variants. |
| PGx | DallAgnol_2008 | not_relevant | 0 | 0 | Study of bacterial isolate diversity; chloramphenicol only tested for in vitro susceptibility, no host genotype-PK/PD effect. |
| PGx | Dameshek_1969 | not_relevant | 1 | 3 | Case report of identical twins with chloramphenicol-induced aplastic anemia; no PK/PD parameter altered by a genetic variant is reported. |
| PGx | Deutsch_1988 | not_relevant | 0 | 0 | Chloramphenicol appears only as a CAT reporter; no PK/PD parameter or gene variant effect in humans studied. |
| popPK | Farrar_2024 | irrelevant | 0 | 0 | This is an antibiotic susceptibility phenotyping study in E. coli using imaging/CNN; chloramphenicol is a co-tested comparator with treatment concentrations, but no toxicokinetic parameters (half-life, clearance, Vd, rate constants) are reported. |
| popPK | GLAZKO_1949 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Garnier_1996 | irrelevant | 0 | 0 | Chloramphenicol appears only as a CAT reporter enzyme in promoter studies; no toxicokinetic parameter for chloramphenicol is reported. |
| popPK | Gautam_2000 | irrelevant | 0 | 0 | Chloramphenicol appears only as a reporter enzyme (CAT), not as the subject substance, and no chloramphenicol kinetic parameters are present. |
| popPK | Giroir_1992 | irrelevant | 0 | 0 | Chloramphenicol appears only as the acetyltransferase (CAT) reporter substrate/analytical reagent, not as a subject substance with any kinetic parameters. |
| PGx | Groenewold_2018 | not_relevant | 2 | 3 | Reports increased chloramphenicol susceptibility in a bacterial gene knockout, not a gene variant effect on a drug PK/PD parameter in a host. |
| PGx | Gónzalez-Quiroga_1989 | not_relevant | 3 | 2 | Only a case-report association between G6PD deficiency and hemolysis risk after chloramphenicol exposure; no PK/PD parameter quantified. |
| popPK | Handy_1989 | irrelevant | 0 | 0 | Chloramphenicol appears only as the substrate in chloramphenicol acetyltransferase reporter assays, with no kinetic parameters for the substance itself. |
| popPK | Henkel_1992 | irrelevant | 0 | 0 | Chloramphenicol appears only as an analytical reagent (CAT reporter assay); no toxicokinetic parameters of chloramphenicol are reported. |
| PGx | Irvin_1980 | not_relevant | 1 | 2 | Reports bacterial resistance via amino acid transport defects, not a host gene variant effect on chloramphenicol PK/PD parameters. |
| PGx | Jain_2009 | not_relevant | 0 | 0 | No pharmacogenomic or genotype-based effect on chloramphenicol PK/PD parameters is reported; only an antagonistic drug interaction with silver nanoparticles is noted. |
| popPK | Jiang_2000 | irrelevant | 0 | 0 | Chloramphenicol appears only as an acetyltransferase reporter, with no toxicokinetic parameters measured. |
| popPK | Jin_2024 | irrelevant | 0 | 0 | Chloramphenicol appears only as an antibiotic selection agent via its resistance gene; no kinetic parameters of chloramphenicol are reported. |
| PGx | Johansson_1994 | not_relevant | 1 | 1 | Chloramphenicol appears only as a CAT reporter gene in vitro, not as a drug whose PK/PD parameter is altered by a genotype. |
| popPK | Khillan_1986 | irrelevant | 0 | 0 | Chloramphenicol appears only as the substrate in the CAT reporter enzyme assay, with no kinetic parameters of chloramphenicol reported. |
| PGx | Kobayashi_1998 | not_relevant | 2 | 4 | In vitro enzyme study of rat CYP2B1 variants; chloramphenicol inactivation rates were unchanged (E322V), and no PK/PD parameter in any organism is reported. |
| PGx | Lazo-Láscarez_2021 | not_relevant | 0 | 0 | Paper reports antimicrobial resistance rates in Campylobacter isolates, not pharmacogenomic effects on chloramphenicol PK/PD parameters. |
| popPK | Leston_2013 | irrelevant | 2 | 1 | Environmental degradation/persistence of chloramphenicol in seawater with algal uptake; no numeric kinetic parameters appear in the evidence, and it is not a human or animal TK study. |
| popPK | Li_2003 | irrelevant | 1 | 1 | Chloramphenicol appears only as a CYP2B-inhibitory experimental reagent on PCB metabolism in seal microsomes; no kinetic parameters for chloramphenicol itself are reported. |
| PGx | Li_2021_2 | not_relevant | 3 | 4 | Reports mutation frequency/MIC changes in E. coli under copper/tetracycline exposure; not a gene variant–PK/PD pharmacogenomic effect of chloramphenicol. |
| PGx | Li_2026 | not_relevant | 0 | 0 | Study reports gene-resistance phenotype associations in Salmonella, not a pharmacogenomic effect on a PK or PD parameter of chloramphenicol. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | Study describes antimicrobial resistance genotypes of L. garvieae isolates, not pharmacogenomic effects on chloramphenicol PK/PD parameters in a host. |
| popPK | Liu_1997 | irrelevant | 0 | 0 | Chloramphenicol appears only as the acetyltransferase reporter gene; no kinetic parameters of chloramphenicol are reported. |
| PGx | Lu_2022 | not_relevant | 2 | 5 | Reports effects of mtrA variants on chloramphenicol biosynthesis (production levels) in the producing organism, not on a PK or PD parameter of chloramphenicol. |
| PGx | Lubran_1989 | not_relevant | 1 | 0 | Only mentions chloramphenicol's direct bone marrow toxicity; no gene variant/genotype linked to a PK/PD parameter. |
| PGx | MacLeod_1991 | not_relevant | 0 | 0 | Editorial commentary with no data on chloramphenicol or any pharmacogenomic PK/PD effects. |
| popPK | Mauviel_1995 | irrelevant | 0 | 0 | Chloramphenicol appears only as a CAT reporter gene reagent; no chloramphenicol TK parameters exist in this gene-expression paper. |
| PGx | Mella_2009 | not_relevant | 0 | 0 | The text contains no pharmacogenomic or PK/PD information on chloramphenicol. |
| popPK | Mizuno_1992 | irrelevant | 0 | 0 | Chloramphenicol appears only as the CAT reporter assay, with no kinetic parameters for the substance itself. |
| popPK | Niven_1998 | irrelevant | 1 | 5 | Chloramphenicol appears only as a reporter gene (CAT) expression product, not as a administered toxicokinetic subject. |
| PGx | Nolden_2022 | not_relevant | 2 | 5 | The paper reports TAS2R genotype effects on bitterness perception (taste), not on any pharmacokinetic or pharmacodynamic parameter of chloramphenicol. |
| PGx | Nolte_1987 | not_relevant | 0 | 0 | Enzyme purification from a resistant bacterium; no host gene variant effect on chloramphenicol PK/PD parameters. |
| PGx | Oelschlaeger_1994 | not_relevant | 0 | 0 | Chloramphenicol used only as a bacterial protein synthesis inhibitor in cell invasion assays; no pharmacogenomic effect on any PK/PD parameter. |
| popPK | Ong_1982 | relevant | 4 | 3 | Rat liver disposition study of chloramphenicol with first-order elimination and metabolite accumulation described, but no explicit numeric kinetic parameter values (half-lives, rate constants) are present beyond partition coefficients and uptake percentages; detailed values may be in tables/figures not provided. |
| PGx | Oriabinskaia_1992 | not_relevant | 0 | 0 | Reports bacterial resistance plasmid effects on bacterial energy metabolism, not how a host gene variant alters chloramphenicol PK/PD parameters. |
| popPK | Osman_2022 | irrelevant | 0 | 0 | This is an antimicrobial resistance surveillance study of canine enterococci; chloramphenicol appears only as a tested susceptibility agent with no toxicokinetic parameters of any kind, and no numeric MIC values for chloramphenicol are given in the text. |
| PGx | Ozmen_2005 | not_relevant | 2 | 5 | In vitro enzyme inhibition study; no gene variant/genotype effect on chloramphenicol PK/PD parameters. |
| PGx | Park_2014 | not_relevant | 3 | 1 | Decreased chloramphenicol susceptibility (MIC) in fluoroquinolone-resistant bacterial mutants reflects antimicrobial resistance cross-effects, not a host pharmacogenomic effect on chloramphenicol PK/PD parameters. |
| PGx | Paul_2011 | not_relevant | 0 | 0 | Paper concerns engineered endolysin-deficient phage therapy for S. aureus; chloramphenicol is only used as a selection marker, with no pharmacogenomic effects on chloramphenicol PK/PD reported. |
| PGx | Perego_1996 | not_relevant | 0 | 0 | Chloramphenicol is only used reporter gene (CAT assay); no pharmacogenomic effect on chloramphenicol PK/PD parameters is reported. |
| popPK | Pinheiro_2008 | irrelevant | 0 | 0 | Chloramphenicol appears only as a comparator in a drug-design/antimicrobial activity study with no kinetic parameters of any kind. |
| popPK | Rosenblatt_2007 | irrelevant | 2 | 1 | Chloramphenicol is only a model drug in an in vitro drug-delivery release study; no kinetic parameters of its disposition and essentially no numeric values appear in the evidence. |
| PGx | Royer_1976 | not_relevant | 3 | 1 | Mentions chloramphenicol and pharmacogenetics among perinatal parameters but provides no gene-variant effect on any PK/PD metric. |
| PGx | Sadler_2009 | not_relevant | 1 | 2 | Only mentions chloramphenicol as a general haemolysis risk in G6PD deficiency; no PK/PD parameter or measured genotype effect. |
| popPK | Shao_2023 | irrelevant | 0 | 0 | This is an epidemiological case-control exposure study measuring urine concentrations and odds ratios, with no kinetic parameters (half-life, clearance, etc.) for chloramphenicol or its analogs. |
| popPK | Sun_2024 | irrelevant | 0 | 5 | This is an environmental adsorption study; the partition coefficient (Kd) describes plastic-water adsorption, not any kinetic parameter of chloramphenicol disposition in a living organism. |
| popPK | Tamura_1992 | irrelevant | 0 | 0 | Chloramphenicol appears only as a substrate in a CAT reporter assay, not as a subject substance with any kinetic parameters. |
| popPK | Tao_2017 | irrelevant | 0 | 0 | Chloramphenicol appears only as an analytical internal standard; the kinetic parameters belong to other substances, not chloramphenicol. |
| popPK | Tchounwou_2001 | irrelevant | 0 | 0 | Chloramphenicol appears only as the chloramphenicol acetyltransferase (CAT) reporter gene, not as the subject substance; no chloramphenicol kinetic parameters are reported. |
| popPK | Templeton_1997 | irrelevant | 0 | 0 | Chloramphenicol appears only as a reporter gene (chloramphenicol acetyltransferase); no toxicokinetic parameters are reported. |
| PGx | Tripathi_2024 | not_relevant | 0 | 0 | Paper studies antimicrobial resistance in plant endophytes, not pharmacogenomic effects on chloramphenicol PK/PD parameters. |
| PGx | Ursini_1990 | not_relevant | 0 | 0 | Chloramphenicol appears only as reporter gene (CAT); no drug PK/PD parameter or pharmacogenomic effect is studied. |
| PGx | Vasiliou_1999 | not_relevant | 0 | 0 | Chloramphenicol is used only as a CAT reporter gene substrate in promoter assays; no drug PK/PD pharmacogenomic effect is reported. |
| popPK | Wu_1996 | irrelevant | 1 | 7 | This is an in vitro membrane-toxicity/mechanism study; the IC50 and n-octanol/water partition coefficient are pharmacological/toxicity endpoints in protozoa, not ADME/disposition kinetic parameters of chloramphenicol, though the numbers are present in the text. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | Chloramphenicol appears solely as the analytical internal standard; the kinetic parameters (t1/2, AUC, Vz/F) belong to chlorogenic acid and other Nauclea officinalis compounds. |
| PGx | Yu_2026 | not_relevant | 2 | 0 | Study is about bacterial antibiotic resistance (MIC of Cutibacterium acnes), not a host pharmacogenomic effect on chloramphenicol PK/PD. |
| popPK | Zapp_1993 | irrelevant | 0 | 0 | Chloramphenicol appears only as the acetyltransferase (CAT) reporter in promoter assays — no kinetic parameters for chloramphenicol. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | This is a human exposure/epidemiological biomonitoring study of urinary antibiotic concentrations and mtDNA methylation associations, with no kinetic parameters (half-life, clearance, rate constants, partition coefficients, or models) for chloramphenicol. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | Chloramphenicol is used only as an internal standard; the kinetic parameters belong to loganin in rats. |
| popPK | Zhao_2019 | irrelevant | 0 | 0 | Exposure/epidemiological study measuring meconium concentrations of chloramphenicol and other antibiotics with no kinetic parameters (no half-life, clearance, Vd, rate constants, or model). |
| PGx | de_1999 | not_relevant | 2 | 2 | Review mentioning chloramphenicol neonatal toxicity via developmental UGT changes, but no gene variant effect on chloramphenicol PK/PD parameters is reported or quantified. |
| PGx | de_2012 | not_relevant | 0 | 0 | The study examines antimicrobial effects on bacterial strains, not host gene variants affecting chloramphenicol PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloramphenicol%5D&body=Drug%3A%20chloramphenicol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chloramphenicol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 04:06 UTC</sub>
