<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Phosphoric acid&quot;}]"></div>

# Phosphoric acid

- **generic name:** Phosphoric acid
- **T3DB:** [T3D4896](http://www.t3db.ca/toxins/T3D4896) · **PubChem:** [CID 1004](https://pubchem.ncbi.nlm.nih.gov/compound/1004)
- **groups:** approved, investigational

## About

Phosphoric acid, also known as orthophosphoric acid or phosphoric(V) acid, is a mineral acid with the chemical formula H3PO4. Alternatively, orthophosphoric acid molecules can combine with themselves to form a variety of compounds referred to as phosphoric acids in a more general way. For a discussion of these, see Phosphoric acids and Phosphates. …

- **Category:** Household Toxin, Food Toxin, Synthetic Toxin
- **Detected in:** blood, urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4896">T3DB T3D4896</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 7664-38-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:26078">ChEBI 26078</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 15:12 | 34:51 | 0/0/0 | 0/0/0 | 0/0/0 | 871,769/34,521 | ollama / glm-5.3-flash | 42 | 3/21 | 42/0 | 0 |

## Coverage

- **PubMed hits:** 430 matched, 214 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böger_2021.pdf` | Böger B et al., Inhibition of the activated sludge-asso…, Water science and technolog… (2021) | pd | 4 | [10.2166/wst.2021.172](https://doi.org/10.2166/wst.2021.172) | [34115618](https://www.ncbi.nlm.nih.gov/pubmed/34115618) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-14 15:11 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelgawad_2022 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase/pH adjustment); all kinetic parameters (t1/2, Vd, Cl, Cmax) belong to metformin, not phosphoric acid. |
| popPK | Abdi_1991 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in blood collection tubes; kinetic parameters are for metrifonate/dichlorvos. |
| PGx | Ali_2020 | not_relevant | 0 | 0 | Paper is an HPLC analytical method validation for anti-infective drugs; phosphoric acid is only a mobile phase additive, with no pharmacogenomic effects. |
| popPK | Alsegiani_2025 | irrelevant | 2 | 4 | Phosphoric acid appears only as a co-administered modifier altering the PKs of erlotinib/gefitinib in rats; no kinetic parameters of phosphoric acid itself are reported, and drug PK values are shown as percent changes in figures. |
| popPK | Ardakani_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile-phase pH adjuster); all kinetic parameters concern tramadol. |
| popPK | Ardakani_2008 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (buffer pH adjustment) in an HPLC method for tramadol; no kinetic parameters for phosphoric acid. |
| popPK | Ardakani_2010 | irrelevant | 0 | 0 | Phosphoric acid is only a mobile-phase pH modifier; the kinetic parameters (half-lives) belong to venlafaxine and its metabolites, not phosphoric acid. |
| popPK | Armstrong_2005 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent used to stabilize plasma samples; all kinetic parameters concern mycophenolic acid, not phosphoric acid. |
| popPK | Aslantürk_2024 | irrelevant | 0 | 0 | Phosphoric acid appears only as part of the chemical description of TPhP; no kinetic parameters for phosphoric acid are reported. |
| popPK | Bansal_2014 | irrelevant | 0 | 0 | Phosphoric acid is used only as an analytical/synthetic reagent in chemistry, with no toxicokinetic parameters for it. |
| popPK | Baskerville_1988 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase component) in an HPLC assay for the antibiotic FCE 22101; no kinetic parameters for phosphoric acid are reported. |
| popPK | Bergman_2021 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC analytical reagent (mobile phase buffer), with no toxicokinetic parameters for it; the kinetic data belong to ceftazidime. |
| PGx | Boniforti_1979 | not_relevant | 0 | 0 | Paper describes gas chromatography methods for identifying anaerobes; phosphoric acid is a column coating, no pharmacogenomic or PK/PD effect reported. |
| popPK | Brandon_1985 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC eluent (analytical reagent); kinetic parameters pertain to aspirin/salicylate, not phosphoric acid. |
| popPK | Briasoulis_2003 | irrelevant | 0 | 0 | Phosphoric acid appears only as part of glufosfamide's chemical name; no kinetic parameters for phosphoric acid itself are reported. |
| popPK | Calvo_2016 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (LC-MS for piroxicam); all kinetic parameters belong to piroxicam, not phosphoric acid. |
| popPK | Carlucci_1991 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase); all kinetic parameters concern rufloxacin, a different substance. |
| popPK | Cayci_2026 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent/mobile-phase component; kinetic parameters concern teriflunomide, not phosphoric acid. |
| popPK | Ceylan_2023 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in the HPLC method; the kinetic parameters belong to carnosic acid. |
| popPK | Chen_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH adjuster (analytical reagent); the kinetic data concern aesculin, not phosphoric acid. |
| popPK | Chen_2010 | irrelevant | 0 | 0 | Phosphoric acid appears only as a 0.5% HPLC mobile-phase additive; all kinetic parameters concern luteolin, not phosphoric acid. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in the HPLC method; all kinetic parameters concern other compounds. |
| popPK | Creeth_1993 | irrelevant | 0 | 0 | Phosphoric acid is not a subject substance; kinetics reported are only for triclosan and zinc. |
| PGx | Daali_2008 | not_relevant | 0 | 0 | Phosphoric acid is only a mobile-phase buffer component; the paper concerns dextromethorphan/CYP2D6 phenotyping, not a pharmacogenomic effect on any PK/PD parameter of phosphoric acid. |
| popPK | Dasgupta_1995 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (0.1 M) in an HPLC method for brequinar, with no kinetic parameters for phosphoric acid. |
| popPK | Deng_2006 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase); the pharmacokinetic parameters belong to wogonoside, not phosphoric acid. |
| popPK | Deng_2014 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (0.2% in HPLC); no kinetic parameters for phosphoric acid are reported. |
| popPK | Denouël_1995 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in the mobile phase of an HPLC method for terbinafine, with no kinetic parameters for phosphoric acid itself. |
| popPK | Dvorzhak_2025 | irrelevant | 0 | 0 | Industrial inventory of radionuclide activity concentrations in phosphoric-acid production materials; no toxicokinetic parameters for phosphoric acid itself. |
| popPK | Eder_1998 | irrelevant | 0 | 0 | Phosphoric acid appears solely as a vehicle component in the 9AC formulation; all kinetic parameters (clearance, half-life, volume) belong to 9-amino-camptothecin, not phosphoric acid. |
| popPK | El_2020 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent; kinetic parameters concern lidocaine and bupivacaine, not phosphoric acid. |
| popPK | Elmasry_2023 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase component/pH adjuster in an analytical UPLC method; no toxicokinetic parameters for phosphoric acid are reported. |
| popPK | Escoriaza_2000 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase/sample preparation); all kinetic parameters belong to irinotecan and SN-38. |
| popPK | Fulmali_2022 | irrelevant | 1 | 0 | A review of phosphate salts/prodrugs of other drugs, with phosphoric acid only as a counterion and no kinetic parameters for phosphoric acid itself. |
| popPK | Gao_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase additive; kinetic parameters are for chlorogenic acid and baicalin, not phosphoric acid. |
| PGx | Goda_2006 | not_relevant | 0 | 0 | Phosphoric acid appears only as a carboxylesterase inhibitor (BNPP), not as the study drug with a reported pharmacogenomic PK/PD effect. |
| PGx | Goseki-Sone_2005 | not_relevant | 1 | 5 | Phosphoric acid is an endogenous hydrolysis product, not a drug; the TNSALP 787T&gt;C K(m) change concerns enzyme kinetics of a gene product, not a PK/PD parameter of phosphoric_acid as a therapeutic agent. |
| popPK | Gullick_2014 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent; the kinetic subject is deltamethrin in rats, not phosphoric acid. |
| popPK | Han_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase ion-suppressor reagent in an HPLC methodological study, with no toxicokinetic parameters for it. |
| popPK | Hao_2005 | irrelevant | 0 | 0 | Phosphoric acid is only an analytical reagent adjusting mobile phase pH; kinetic parameters belong to scutellarin in rats, not to phosphoric acid. |
| popPK | Hassib_2021 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent for mobile-phase pH adjustment; no kinetic parameters of phosphoric acid are reported. |
| popPK | Helmy_2016 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase additive) in an HPLC method for fexofenadine, with no kinetic parameters for phosphoric acid. |
| popPK | Helson_2012 | irrelevant | 1 | 2 | Phosphoric acid appears only as an analytical stabilizer; the kinetic parameters (half-lives, clearance) belong to curcumin/THC, not to phosphoric acid itself. |
| PGx | Heng_2022 | not_relevant | 0 | 0 | Phosphoric acid appears only as a reagent for preparing swollen cellulose substrate in bacterial enzyme assays; no pharmacokinetic/pharmacodynamic or pharmacogenomic drug context. |
| popPK | Hong_2005 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent; all kinetic parameters concern tetrahydropalmatine in dogs, not phosphoric acid. |
| popPK | Hu_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (pH-adjusting KH2PO4 mobile phase buffer) in an HPLC method for doxorubicin kinetics in rabbits; no toxicokinetic parameters for phosphoric acid itself are reported. |
| PGx | Hu_2015 | not_relevant | 0 | 0 | Plant heat-stress memory study; phosphoric acid only mentioned as a leaf metabolite with no gene-variant effect on drug PK/PD. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | Phosphoric acid appears only as a metabolomic biomarker in a bacterium, not as the subject substance of any toxicokinetic parameter. |
| popPK | Huo_2014 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; kinetic parameters belong to a different substance. |
| popPK | Högberg_2008 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical sample preservative; kinetic parameters are for phthalates, not the subject substance, and no numeric values for phosphoric acid itself are reported. |
| popPK | Idowu_2004 | irrelevant | 0 | 0 | Phosphoric acid is used only as an analytical reagent/protein precipitant in an HPLC method; kinetic parameters belong to enrofloxacin/ciprofloxacin. |
| popPK | Jalali-Heravi_2000 | irrelevant | 0 | 0 | GC stationary-phase retention modeling paper; phosphoric acid appears only as part of DEHPA chromatography reagent, no toxicokinetic parameters. |
| popPK | Jiang_2013 | irrelevant | 0 | 0 | Phosphoric acid appears only as a 0.05% mobile-phase modifier in the HPLC assay; all kinetic parameters belong to gastrodin and puerarin, not phosphoric acid. |
| popPK | Jiang_2015 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in HPLC analysis; the kinetic parameters belong to gastrodin and puerarin in rats. |
| popPK | Ju_2010 | irrelevant | 0 | 0 | The kinetic parameters belong to gastrodin; phosphoric acid appears only as a mobile-phase reagent in the HPLC method. |
| popPK | Kastury_2019 | irrelevant | 0 | 0 | Phosphoric acid appears only as a soil amendment to immobilize lead; all kinetic measures (blood Pb, bioaccessibility) concern Pb, not phosphoric acid, and no phosphoric acid kinetic parameters exist. |
| popPK | Kau_2001 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in the HPLC mobile phase; the kinetic parameters are for ropivacaine, not phosphoric acid. |
| popPK | Keshetty_2006 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase acidifier) for a valdecoxib HPLC method; no kinetic parameters of phosphoric acid. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | Phosphoric acid is only an excipient/acidifying agent in the prasugrel formulation; all kinetic parameters (AUC, Cmax) pertain to prasugrel, not phosphoric acid. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | Phosphoric acid appears only as an inactive preservative ingredient in a drug-stability study, with no toxicokinetic parameters for it. |
| popPK | Kitazume_1991 | irrelevant | 0 | 0 | Phosphoric acid appears only as a chromatographic solvent reagent (di-(2-ethylhexyl)phosphoric acid), with no toxicokinetic parameters for phosphoric acid. |
| popPK | Kloppenburg_1997 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent for sample acidification, the kinetic parameters belong to urea, and no phosphoric acid toxicokinetic values are given. |
| popPK | Kohlert_2002 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in a thymol assay; no phosphoric acid kinetic parameters reported. |
| popPK | Kotani_2006 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent; the kinetic parameters reported are for baicalin/baicalein, not for phosphoric acid. |
| popPK | Kudo_2000 | irrelevant | 0 | 0 | Phosphoric acid appears only as part of an inhibitor reagent (bis(4-nitrophenyl)phosphoric acid); the kinetic parameters (Km, Vmax, intrinsic clearance) are for phenacetin deacetylation, not for phosphoric acid as the subject substance. |
| PGx | Kwan_2011 | not_relevant | 0 | 0 | Phosphoric acid is only a buffer component in the CE assay; no genetic effect on phosphoric acid PK/PD is reported. |
| popPK | Lai_1998 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent for quantifying bisnafide; no kinetic parameters of phosphoric acid are reported. |
| PGx | Langasco_2022 | not_relevant | 0 | 0 | The paper is about arsenic speciation analysis in soil/rice; phosphoric acid is only an extraction reagent, with no pharmacogenomic PK/PD effects reported. |
| popPK | Li_2011 | irrelevant | 0 | 0 | Phosphoric acid is only a mobile-phase reagent; the kinetic parameters concern ponicidin, a different substance. |
| popPK | Li_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; the kinetic parameters (half-lives, AUC, Vd) belong to the organotin compound DPDFT in rats, not phosphoric acid. |
| popPK | Li_2019 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent; all kinetic parameters belong to embelin, the subject substance. |
| popPK | Liang_1994 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical acidification reagent in an HPLC assay for cefazolin, with no kinetic parameters for phosphoric acid itself. |
| PGx | Lin_2007 | not_relevant | 2 | 3 | Phosphoric acid is only an analytical reagent (pH adjustment); no gene effect on its PK/PD is reported. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (0.1% in methanol) for LC determination of indomethacin; no kinetic parameters for phosphoric acid itself are reported. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile phase pH adjuster (analytical reagent); the kinetic parameters belong to danshensu, not phosphoric acid. |
| popPK | Liu_2008 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase component in the LC method; the pharmacokinetic parameters belong to CQP propionic acid, not phosphoric acid. |
| popPK | Liu_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of hyperoside in rats; phosphoric acid appears only as an analytical mobile-phase reagent, and no TK parameters for it are given. |
| popPK | Liu_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase component; kinetic parameters are for vitexin-4″-O-glucoside, not phosphoric acid. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase buffer component for HPLC analysis of isocorydine, not as the subject of any kinetic parameter. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase component for measuring naringenin/hesperetin, not as the subject substance. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Phosphoric acid appears only as a degradation product of a nanoparticle platform; no kinetic parameters (half-life, clearance, rate constants) for phosphoric acid are reported. |
| popPK | Lössner_2001 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; the kinetic data concern fenofibric acid, not phosphoric acid. |
| popPK | Ma_1996 | irrelevant | 0 | 0 | Phosphoric acid appears only as part of the reagent DEHPA in a chromatography method; no toxicokinetic parameters for phosphoric acid itself. |
| popPK | Majid_2001 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent in an HPLC method for prednisolone; no kinetic parameters for phosphoric acid. |
| popPK | Mare_2005 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent; the kinetic data concern MESNA, not phosphoric acid. |
| popPK | Martín-Pozo_2021 | irrelevant | 0 | 0 | Phosphoric acid appears only as a digestion reagent in an analytical method for UV filters; no toxicokinetic parameters for it are reported. |
| popPK | Matabudul_2012 | irrelevant | 1 | 1 | Phosphoric acid is used only as an analytical tissue-stabilizing reagent; the kinetic parameters (tissue levels, partition coefficients) belong to curcumin/THC, not phosphoric acid itself. |
| popPK | Moro_1983 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent, not as the subject of any kinetic parameters; no numeric values for phosphoric acid. |
| popPK | Muchohi_2011 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; kinetic parameters reported are for ciprofloxacin, not phosphoric acid. |
| popPK | Nasr_2019 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH modifier in the HPLC method; no kinetic parameters for it are reported. |
| popPK | Ogura_2000 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent/diluent; the parameters (oxalate clearance, plasma oxalate) belong to oxalate, a different substance. |
| popPK | Park_1988 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent; kinetic parameters belong to drug AL01567. |
| popPK | Patel_2004 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in an analytical method for mycophenolic acid; no toxicokinetic parameters for phosphoric acid itself. |
| popPK | Patil_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical HPLC mobile-phase reagent; kinetic parameters concern berberine and lysergol. |
| popPK | Peng_1998 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile phase reagent (orthophosphoric acid) in the HPLC method; kinetic parameters concern naringenin. |
| popPK | Persson_1990 | irrelevant | 0 | 0 | Phosphoric acid is only an analytical reagent in an LC method for metoprolol; no kinetic parameters for phosphoric acid are reported. |
| popPK | Piao_2008 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH adjuster (analytical reagent) for valsartan, with no kinetic parameter for phosphoric acid itself. |
| popPK | Rasool_2010 | irrelevant | 1 | 2 | Phosphoric acid appears only as a mobile-phase pH-adjusting reagent; kinetic parameters (Cmax, Vd, clearance) belong to ofloxacin, not phosphoric acid. |
| PGx | Recber_2020 | not_relevant | 1 | 1 | No drug or PK/PD parameter of phosphoric acid; only metabolomic levels associated with MTHFR genotype. |
| popPK | Reemtsma_2011 | irrelevant | 1 | 1 | Human biomonitoring concentrations of phosphate esters; phosphoric acid itself is not the subject and no kinetic half-life/rate parameters are reported. |
| popPK | Rouini_2006 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase pH adjuster; all kinetic data concern tramadol, not phosphoric acid. |
| popPK | Rubin_1995 | irrelevant | 0 | 0 | Phosphoric acid appears only as a formulation vehicle; all kinetic parameters (terminal half-life, two-compartment model) belong to 9-aminocamptothecin. |
| popPK | Rushing_2018 | irrelevant | 0 | 0 | Phosphoric acid appears only as a reagent/co-treatment for AFB1 detoxification; all toxicokinetic parameters (protein binding, permeability, stability) belong to aflatoxin derivatives, not phosphoric acid. |
| popPK | Salek_2016 | irrelevant | 1 | 3 | The substance studied is 177Lu-DOTMP, a phosphonate chelator complex, not phosphoric acid; phosphoric acid appears only as a chemical moiety/reagent, and the biodistribution values (%ID/g in rat) belong to 177Lu-DOTMP, not phosphoric acid. |
| popPK | Shah_2016 | irrelevant | 0 | 0 | Phosphoric acid is only an analytical deproteination reagent; all kinetic parameters (AUC) belong to diclofenac, not phosphoric acid. |
| popPK | Shibuya_2020 | irrelevant | 0 | 0 | Phosphoric acid appears only as a reaction solvent; kinetic parameters (clearance, monkey dosing) concern K-604, not phosphoric acid. |
| PGx | Shibuya_2020 | not_relevant | 0 | 0 | Paper reports synthesis and general PK of K-604 metabolites; no gene variant/genotype effect on phosphoric acid PK/PD. |
| popPK | Si_2008 | irrelevant | 0 | 0 | Phosphoric acid is only a mobile phase reagent; PK parameters belong to isoferulic acid, not phosphoric acid. |
| popPK | Sun_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase/sample acidifier); the kinetic parameters belong to isofraxidin, not phosphoric acid. |
| popPK | Suntivich_2026 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in an HPLC method for triterpenes; no kinetic parameters for phosphoric acid exist in any species. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | Phosphoric acid (orthophosphoric acid) appears only as an HPLC mobile-phase component, not as the study substance; kinetics are for hydroxysafflor yellow A. |
| popPK | Tantra_2024 | irrelevant | 1 | 1 | A review of phosphate prodrugs where phosphoric acid only appears as a chemical moiety/strategy, with no quantitative toxicokinetic parameters of phosphoric acid itself. |
| popPK | Tatar_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent in an analytical HPLC method for moxifloxacin, with no toxicokinetic parameters for phosphoric acid itself. |
| popPK | Tsai_1994 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase additive) for honokiol pharmacokinetics; no phosphoric acid kinetic parameters. |
| popPK | Tsai_1996 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH adjusting reagent in an HPLC method for osthole; no kinetic parameters for phosphoric acid exist. |
| popPK | Tsai_1996_2 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH reagent; the kinetic data concern dicentrine in rats. |
| popPK | Tsai_1999 | irrelevant | 0 | 0 | Phosphoric acid appears only as a chromatographic mobile-phase reagent; pharmacokinetic parameters belong to cefuroxime, not phosphoric acid. |
| popPK | Tsai_2000 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical chromatographic mobile-phase reagent; the kinetic data belong to cefazolin, not phosphoric acid. |
| popPK | Tsai_2001 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (monosodium phosphoric acid buffer); the kinetic parameters belong to ceftazidime in rats. |
| popPK | Tsai_2001_2 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile-phase buffer); all kinetic parameters belong to cefsulodin. |
| popPK | Tsuji_2021 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; all kinetic parameters concern tedizolid, not phosphoric acid. |
| popPK | Urva_2009 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase pH reagent in an HPLC assay for doxorubicin; no kinetic parameters for phosphoric acid are reported. |
| popPK | Valizadeh_2012 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent; all kinetic parameters belong to ciprofloxacin. |
| popPK | Wang_1999 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent for the analytical method; the kinetic data concern zolpidem, not phosphoric acid. |
| popPK | Wang_2006 | irrelevant | 0 | 0 | Phosphoric acid appears only as an HPLC mobile-phase reagent, not as the subject substance of any kinetic parameter. |
| popPK | Wang_2008_2 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in the HPLC mobile phase, not as the subject substance of any kinetic parameter. |
| popPK | Wang_2012 | irrelevant | 0 | 0 | Phosphoric acid is only an HPLC mobile-phase reagent; kinetic parameters belong to a daidzein derivative, not phosphoric acid. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | Plant-pathogen transcriptomics study; phosphoric acid appears only as enzyme category, no drug PK/PD pharmacogenomics. |
| popPK | Wen_1995 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase); the kinetic subject is ferulic acid in rabbits, with no phosphoric acid parameters reported. |
| popPK | Wen_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for praziquantel; phosphoric acid appears only as a buffer reagent, so no kinetics for the subject substance. |
| popPK | Winkens_2018 | irrelevant | 0 | 0 | This is an indoor exposure/dust measurement study of PFASs (polyphosphoric acid esters as precursors, not phosphoric acid itself) with no kinetic parameters for phosphoric acid. |
| popPK | Yamane_1989 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (HPLC sample solvent for lidocaine) in a dog lidocaine pharmacokinetic study, with no kinetic parameters for phosphoric acid itself. |
| popPK | Yamashita_2022 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical/covalent reagent used to derivatize a dendrimer carrier; the kinetic/tissue-distribution data concern the dendrimer, not phosphoric acid itself. |
| popPK | Yan_2007 | irrelevant | 0 | 0 | Phosphoric acid appears solely as an analytical reagent in the HPLC mobile phase; no kinetic parameters for phosphoric acid are reported. |
| popPK | Yan_2009 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase reagent (0.1% in HPLC); the kinetic data concern carnosic acid, not phosphoric acid. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | Phosphoric acid is not the subject; the pharmacokinetic parameters pertain to polydatin, resveratrol and emodin in rats, with phosphoric acid absent from the evidence. |
| popPK | Yeganeh_2000 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical HPLC mobile-phase reagent for terbinafine, not as the subject toxicokinetic substance. |
| PGx | Ying_2012 | not_relevant | 0 | 0 | Phosphoric acid is only a buffer component in the running buffer; no pharmacogenomic effect on its PK/PD is reported. |
| popPK | Yoon_2010 | irrelevant | 0 | 0 | Phosphoric acid appears only as a mobile-phase component (analytical reagent); the study substance is ibudilast, with no kinetic parameters for phosphoric acid. |
| popPK | Zhang_2004 | irrelevant | 0 | 0 | The kinetic parameters belong to progesterone; phosphoric acid appears only as a mobile-phase reagent. |
| popPK | Zhang_2005 | irrelevant | 0 | 0 | Phosphoric acid is only the analytical reagent in the HPLC mobile phase; kinetic parameters concern salvianolic acid B, a different substance. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent (mobile phase/plasma acidification); kinetic parameters belong to dihydromyricetin and myricetin, not phosphoric acid. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | Phosphoric acid appears only as a 0.1% HPLC mobile-phase additive; kinetic parameters belong to MSL/salicylic acid in dogs, not phosphoric acid. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical extraction reagent; the studied substance is methylene-diphosphonate, with no kinetic parameters for phosphoric acid itself. |
| popPK | Zheng_2019 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical mobile-phase reagent (orthophosphoric acid 0.4%) in an HPLC method for fluoroquinolones; no kinetic parameters of phosphoric acid itself. |
| popPK | el-Yazigi_1993 | irrelevant | 0 | 0 | Phosphoric acid appears only as an analytical reagent in an LC assay for antidepressants; no kinetic parameters for phosphoric acid itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphosphoric_acid%5D&body=Drug%3A%20phosphoric_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phosphoric_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
