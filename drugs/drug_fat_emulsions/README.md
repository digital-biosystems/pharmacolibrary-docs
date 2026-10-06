<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05B&quot;,&quot;href&quot;:&quot;atc/B05B.md&quot;},{&quot;label&quot;:&quot;fat emulsions&quot;}]"></div>

# fat emulsions

- **generic name:** fat emulsions
- **ATC codes:** `B05BA02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Fat emulsions such as Kabiven are injectable mixtures used to provide nutrition intravenously to patients who cannot be fed normally. They are given as intravenous solutions for parenteral nutrition, typically in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4206658](https://www.wikidata.org/wiki/Q4206658) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 23:15 | 6:19 | 0/0/0 | 0/0/0 | 0/0/0 | 214,587/6,516 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 5/12 | 15/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 534 matched, 95 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mahedero_1992.pdf` | Mahedero G et al., Absorption of Intralipid and interferen…, American journal of surgery (1992) | popPK | 9 | [10.1016/s0002-9610(05)80644-0](https://doi.org/10.1016/s0002-9610(05)80644-0) | [1626606](https://pubmed.ncbi.nlm.nih.gov/1626606) | The study reports quantitative pharmacokinetic parameters (Ka, Ke, bioavailability) for Intralipid (fat emulsion) in rats using a two-compartment model. |
| `Hendrikx_1979.pdf` | Hendrikx A et al., Changes in some lipid variables in obes…, The American journal of cli… (1979) | popPK | 8 | [10.1093/ajcn/32.9.1799](https://doi.org/10.1093/ajcn/32.9.1799) | [474469](https://pubmed.ncbi.nlm.nih.gov/474469) | The study reports the fractional removal rate (a clearance parameter) of Intralipid (fat emulsion) in humans, but specific numeric values are not present in the provided text. |
| `Mayfield_1984.pdf` | Mayfield C et al., Creaming and plasma clearance rate of i…, Clinical nutrition (Edinbur… (1984) | popPK | 8 | [10.1016/s0261-5614(84)80006-0](https://doi.org/10.1016/s0261-5614(84)80006-0) | [16829441](https://pubmed.ncbi.nlm.nih.gov/16829441) | The study reports quantitative plasma clearance rates (percentage per minute) for Intralipid in critically ill patients, which are direct pharmacokinetic disposition parameters. |
| `Pichard_1990.pdf` | Pichard C et al., Comparative clearance of two new fat em…, JPEN. Journal of parenteral… (1990) | popPK | 8 | [10.1177/014860719001400182](https://doi.org/10.1177/014860719001400182) | [2109121](https://pubmed.ncbi.nlm.nih.gov/2109121) | The study reports quantitative lipid clearance rates (k) and half-lives for fat emulsions in human volunteers. |
| `Stoney_2002.pdf` | Stoney CM et al., Acute psychological stress reduces plas…, Psychophysiology (2002) | popPK | 8 | [10.1017/S0048577202010284](https://doi.org/10.1017/S0048577202010284) | [12206298](https://pubmed.ncbi.nlm.nih.gov/12206298) | The study reports quantitative clearance rates for an intravenous fat emulsion in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-05T23:14:31.673689+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akkar_2003 | irrelevant | 0 | 0 | The paper describes the formulation and physical stability of carbamazepine emulsions, not the pharmacokinetics of fat emulsions. |
| popPK | Akyol_2024 | irrelevant | 1 | 0 | The study investigates the effect of intravenous lipid emulsion (ILE) as a co-administered antidote on the pharmacokinetics of ivermectin and carprofen, rather than reporting the pharmacokinetic parameters of the lipid emulsion itself. |
| popPK | Ames_1990 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of hexamethylmelamine, using fat emulsions (Intralipid) only as a vehicle/formulation, not as the subject drug. |
| popPK | Andrew_1978 | irrelevant | 2 | 0 | The study focuses on lipid metabolism and ketogenesis (metabolic effects) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for the fat emulsion itself. |
| popPK | Anya_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on the use of Intralipid for immunomodulation in IVF, containing no pharmacokinetic data or disposition parameters. |
| popPK | Avedissian_2021 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of amiodarone (the subject drug) in the presence of fat emulsion (Intralipid) as a rescue therapy, rather than the pharmacokinetics of the fat emulsion itself. |
| popPK | Ayestarán_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B, using fat emulsion (Intralipid) only as a vehicle/formulation comparator rather than as the subject drug. |
| popPK | Azevedo_2019 | irrelevant | 0 | 0 | The study evaluates the effect of Intralipid (fat emulsion) on biochemistry assay interference in canine serum, not the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Baazm_2021 | irrelevant | 0 | 0 | The study investigates the neuroprotective and anti-inflammatory effects of omega-3 fatty acids in a spinal cord injury model, not the pharmacokinetics of fat emulsions. |
| popPK | Bach_1989 | irrelevant | 1 | 0 | The paper is a review discussing qualitative differences in clearance and metabolism of MCT/LCT emulsions without reporting specific quantitative pharmacokinetic parameter values. |
| popPK | Bass_1984 | irrelevant | 0 | 0 | The paper is a case report of a safety adverse event (ARDS) and does not report any pharmacokinetic parameters. |
| popPK | Berlana_2024 | irrelevant | 0 | 0 | The study is a clinical trial evaluating inflammatory markers and clinical outcomes, not a pharmacokinetic study reporting disposition parameters for fat emulsions. |
| popPK | Brands_2013 | irrelevant | 0 | 0 | The study investigates the effect of lipid emulsions on angiopoietin-like 4 (ANGPTL4) levels and insulin sensitivity, not the pharmacokinetic disposition parameters (CL, V, etc.) of the fat emulsions themselves. |
| popPK | Burch_2011 | irrelevant | 0 | 0 | The paper is a review of case reports regarding the therapeutic use of lipid emulsion for local anesthetic toxicity and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the lipid emulsion itself. |
| popPK | Caliph_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of halofantrine, using fat emulsions only as a delivery vehicle/comparator rather than as the subject drug. |
| popPK | Cane_1980 | irrelevant | 0 | 0 | The study investigates the spectrophotometric interference of Intralipid on hemoglobin measurements, not its pharmacokinetic disposition parameters. |
| popPK | Charman_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of danazol, not fat_emulsions, which is used only as a formulation vehicle. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paclitaxel (PTX) delivered via lipid nanoemulsions, not the pharmacokinetics of fat emulsions as the subject drug. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The study is an in-vitro immunological investigation of lipid emulsions' effects on macrophage phagocytosis and bacterial survival, containing no pharmacokinetic parameters. |
| popPK | Clark_1994 | irrelevant | 0 | 0 | The paper is a clinical/immunological study on Intralipid as a treatment for abortion, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Clark_2020 | irrelevant | 0 | 0 | The paper discusses the immunological effects of Intralipid (fat emulsion) on pregnancy outcomes in mice and humans, but does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Cocilova_2019 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of intravenous lipid emulsion (Intralipid) for treating brevetoxin poisoning in turtles, not the pharmacokinetic parameters (CL, V, etc.) of the lipid emulsion itself. |
| popPK | Cox_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, not fat emulsions, which are used only as the vehicle/formulation. |
| popPK | Diedrich_2018 | irrelevant | 0 | 0 | The study investigates the efficacy of a fat emulsion (Lipofundin) as a vehicle for peritoneal lavage in a sepsis model, reporting survival and bacterial load rather than pharmacokinetic parameters. |
| popPK | Ding_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etomidate (a sedative), not fat_emulsions as the subject drug. |
| popPK | Doenicke_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etomidate (the subject drug) using a lipid emulsion as a solvent, not the pharmacokinetics of the lipid emulsion itself. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of tetrabromobisphenol A (TBBPA), not a pharmacokinetic study of fat emulsions. |
| PD | EFSA_2024 | not_relevant | 0 | 0 | The paper is a toxicological risk assessment for TBBPA in food, not a pharmacodynamic study of fat emulsions, and does not report any drug concentration-effect or dose-response parameters. |
| popPK | Fajdiga_2025 | irrelevant | 2 | 3 | The study is an in-vitro mechanistic investigation of cell mechanics and cytotoxicity, not a pharmacokinetic study, although it includes a supplementary calculation of steady-state concentrations using literature-derived half-lives. |
| popPK | Férézou_2001 | irrelevant | 0 | 0 | The study is a physicochemical characterization of Intralipid particles (size, composition) and does not report any pharmacokinetic parameters. |
| popPK | Garnacho-Montero_2002 | irrelevant | 0 | 0 | The study assesses immunological effects (bacterial clearance, PGE2 levels, survival) of lipid emulsions in septic rats, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the lipid emulsion itself. |
| popPK | Geng_2021 | irrelevant | 0 | 0 | The study focuses on the formulation and pharmacokinetics of etomidate, not fat emulsions as the subject drug. |
| popPK | Gharehbaghi_2020 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of lipid emulsions on retinopathy of prematurity outcomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Giorgia_2023 | irrelevant | 0 | 0 | The study evaluates the physico-chemical stability of parenteral nutrition admixtures, not the pharmacokinetic disposition parameters of fat emulsions. |
| popPK | Grant_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enterokinase, not fat emulsions (Intralipid is only mentioned as a failed inhibitor of endocytosis). |
| popPK | Greenberg_1990 | irrelevant | 0 | 0 | The study investigates the behavioral satiating effects of Intralipid in rats and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Griffin_1979 | irrelevant | 2 | 0 | The study focuses on the biochemical composition of lipoproteins (Lp-X) and lipid concentrations resulting from fat emulsion infusion, rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Hailer_1986 | irrelevant | 2 | 0 | The study focuses on the effect of fat emulsions on serum lipoprotein composition and triglyceride removal rates rather than reporting standard quantitative pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Harvey_2022 | irrelevant | 0 | 0 | The study evaluates hepatic function and injury markers (bilirubin, enzymes) in lambs, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the fat emulsions. |
| popPK | He_2024 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical outcomes (e.g., cholestasis, sepsis) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Heinonen_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levobupivacaine (the subject drug) in the presence of lipid emulsion (the comparator/treatment), not the pharmacokinetics of the lipid emulsion itself. |
| popPK | Hendrikx_1979 | relevant | 8 | 2 | The study reports the fractional removal rate (a clearance parameter) of Intralipid (fat emulsion) in humans, but specific numeric values are not present in the provided text. |
| popPK | Houeijeh_2011 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects (blood flow, pressure) of fat emulsions in fetal lambs, not their pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Hulman_1986 | irrelevant | 0 | 0 | no_text gate: only 390 chars of text extracted (&lt; 400) |
| popPK | Kilian_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology trial assessing histopathology and lipid peroxidation in rats, not a pharmacokinetic study reporting disposition parameters for fat emulsions. |
| popPK | Klek_2024 | irrelevant | 0 | 0 | The study assesses safety and fatty acid composition changes, not pharmacokinetic disposition parameters (CL, V, etc.) for the lipid emulsion. |
| popPK | Knibbe_1999 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol, not for the fat emulsion vehicle itself. |
| popPK | Knibbe_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of propofol, not fat emulsions, which are only the vehicle/comparator. |
| popPK | Koh_2025 | irrelevant | 2 | 0 | The study investigates the effect of lipid emulsion on the dialysis of amitriptyline (the subject drug), not the pharmacokinetic parameters of the lipid emulsion itself. |
| popPK | Kruger_1994 | irrelevant | 0 | 0 | The paper describes a photoacoustic imaging technique using Liposyn (a fat emulsion) as a scattering medium, not a pharmacokinetic study of fat emulsions. |
| popPK | Li_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetic effects of lipid emulsions on an overdosed drug (propafenone) rather than reporting the disposition parameters (CL, V, etc.) of the lipid emulsion itself. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the drug aprepitant (APT) formulated in a lipid emulsion, not the pharmacokinetics of the fat emulsion itself. |
| popPK | Liu_2019 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of etoposide (a chemotherapeutic agent) delivered in a lipid emulsion, not the pharmacokinetics of fat emulsions (nutritional lipids) as the subject drug. |
| popPK | Llop_2018 | irrelevant | 0 | 0 | The study analyzes the phytosterol content of lipid emulsion products using HPLC and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Lloyd_1986 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of Intralipid on pulmonary vascular resistance using echocardiography, not pharmacokinetic parameters. |
| popPK | Londoño_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ivermectin, not fat emulsions, which are used only as a treatment modality (dialysate/lipid emulsion). |
| popPK | Lutz_1989 | irrelevant | 2 | 0 | The paper discusses the qualitative relationship between particle size and clearance rate but does not report specific quantitative PK parameters (CL, V, t1/2) for a specific fat emulsion formulation. |
| popPK | Martínez-Lozano_2016 | irrelevant | 0 | 0 | The study is a clinical trial comparing efficacy and safety outcomes (infection, mortality) of two lipid emulsions, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Mediavilla_2019 | irrelevant | 0 | 0 | The study assesses physicochemical compatibility and stability of amiodarone in TPN, not the pharmacokinetics of fat emulsions. |
| popPK | Mu_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the drug triptolide (TP) formulated in a lipid emulsion, not the pharmacokinetics of the lipid emulsion itself as the subject drug. |
| popPK | Nahata_1995 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Nahata_1995 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric PD parameters for fat emulsions. |
| popPK | Nanhuck_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipid emulsions on cell function and eicosanoid production, reporting no pharmacokinetic parameters. |
| popPK | Nanjee_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of apolipoprotein A-I, not fat emulsions (Intralipid is only a co-infused comparator). |
| popPK | Nieto_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B (the subject drug), not fat emulsions (which serve as the formulation vehicle/comparator). |
| PD | Niu_2020 | not_relevant | 3 | 2 | The paper reports PK parameters (AUC, t1/2) and qualitative/semi-quantitative pain scores (thresholds/latency) at specific time points, but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD parameters derived from a PK/PD model. |
| popPK | Noa_2007 | irrelevant | 0 | 0 | The study investigates the protective effects of policosanol on arterial injury in rabbits and does not report pharmacokinetic parameters for fat emulsions. |
| popPK | Nugent_1984 | irrelevant | 0 | 0 | The study investigates the immunological effects of Intralipid on reticuloendothelial function and macrophage activity, not its pharmacokinetic disposition parameters. |
| popPK | Ok_2013 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of lipid emulsion's ability to reverse local anesthetic-induced vasodilation in isolated rat aorta, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for the lipid emulsion itself. |
| popPK | Perry_1991 | irrelevant | 0 | 0 | The study investigates the effect of propofol and Intralipid (fat emulsion) on the pharmacokinetics of propranolol, not the pharmacokinetics of the fat emulsion itself. |
| popPK | Phan_2020 | irrelevant | 0 | 0 | The paper describes a sensor for glucose detection and does not report pharmacokinetic parameters for fat emulsions. |
| popPK | Piccolo_2024 | irrelevant | 0 | 0 | The study reports physiological and biochemical responses (hemodynamics, blood chemistry, lipidomics) to lipid emulsion in fetal sheep, but does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for the drug. |
| PD | Polenceusz_2008 | not_relevant | 1 | 0 | The text is a review discussing the clinical use and mechanisms of Intralipid for local anesthetic toxicity, but it does not report any specific pharmacodynamic models, exposure-response data, or numeric PD parameters. |
| popPK | Psáder_2012 | irrelevant | 0 | 0 | The study investigates gallbladder motility in response to a fat emulsion (Lipofundin) as a cholagogue meal, not the pharmacokinetic disposition parameters (CL, V, etc.) of the fat emulsion itself. |
| popPK | Riaz_1993 | irrelevant | 0 | 0 | The study investigates the chemical stability and compatibility of aminophylline with excipients and IV fluids, not the pharmacokinetics of fat emulsions. |
| popPK | Riemens_1999 | irrelevant | 0 | 0 | The study investigates the effects of a fat emulsion challenge on lipoprotein remodeling enzymes (LCAT, PLTP, CETP) rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) for the fat emulsion itself. |
| popPK | Rostas_2019 | irrelevant | 0 | 0 | The paper is a review discussing the clinical benefits and composition of lipid emulsions, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Sala-Vila_2007 | irrelevant | 0 | 0 | The paper is a review of clinical outcomes (safety, glucose metabolism, liver function) for a lipid emulsion and does not report quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Semis_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nystatin (an antifungal) in a lipid formulation, not the pharmacokinetics of fat emulsions (Intralipid) as the subject drug. |
| popPK | Shah_1991 | irrelevant | 1 | 0 | The study investigates the effect of fat emulsions (Intralipid) on the pharmacokinetics of cyclosporine, not the pharmacokinetic parameters of the fat emulsion itself. |
| popPK | Shi_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinnarizine (a calcium channel blocker) delivered in a lipid emulsion, not the pharmacokinetics of fat emulsions (lipid nutrients) as the subject drug. |
| popPK | Shi_2013 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of bupivacaine (the subject drug) in the presence of lipid emulsion (the comparator/agent of interest), not the pharmacokinetics of the lipid emulsion itself. |
| popPK | Stoney_2002 | relevant | 8 | 2 | The study reports quantitative clearance rates for an intravenous fat emulsion in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Suganuma_2018 | irrelevant | 2 | 0 | The study reports correlations between lipid emulsion dose and lipoprotein subclass contents (triglycerides/cholesterol) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Tang_2016 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for bupivacaine (the subject drug), while fat emulsions are used as co-administered agents to modify bupivacaine's disposition, not as the subject of the PK analysis. |
| popPK | Tibell_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Cyclosporin A using fat emulsion as a carrier, not the pharmacokinetics of fat emulsion itself. |
| popPK | Tikhomirov_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of opioid sequestration by lipid emulsions, not a pharmacokinetic study of the fat emulsion itself. |
| popPK | Tricò_2022 | irrelevant | 0 | 0 | The study investigates the metabolic effects of a fat emulsion (Intralipid) on glucose homeostasis and insulin clearance, but does not report pharmacokinetic parameters (CL, V, ka) for the fat emulsion itself. |
| popPK | Venkataram_1990 | irrelevant | 1 | 1 | The study investigates the pharmacokinetics of cyclosporine (the subject drug) using fat emulsions (Intralipid) as a vehicle/comparator, not the pharmacokinetics of the fat emulsion itself. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study investigates the metabolic role of Apolipoprotein A-IV in knockout rats and does not report pharmacokinetic parameters (CL, V, etc.) for fat emulsions. |
| popPK | Wasan_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cholesterol in the presence of a vegetable stanol mixture, using Intralipid (fat emulsion) only as a vehicle, not as the subject drug. |
| popPK | Watson_2022 | irrelevant | 0 | 0 | The paper is a case report on thiocyanate toxicity where lipid emulsion was used as a treatment, but it does not report pharmacokinetic parameters for the lipid emulsion itself. |
| popPK | Weigt_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of lipid emulsions' effect on NMDA receptor currents, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of artemether and lumefantrine delivered via lipid emulsions, not the pharmacokinetics of fat emulsions (e.g., Intralipid) as the subject drug. |
| popPK | Ye_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel (PTX) delivered in a lipid emulsion, not the pharmacokinetics of the lipid emulsion itself as the subject drug. |
| PD | Yesiltas_2022 | not_relevant | 0 | 0 | The paper investigates antioxidant peptides in food emulsions using in vitro assays (DPPH, lipid oxidation) and does not report any pharmacokinetic or pharmacodynamic modeling for a drug. |
| popPK | Yousef_2024 | irrelevant | 1 | 0 | The study is an in vitro mechanistic investigation of intestinal lymphatic uptake using fat emulsions (Intralipid) as a model system or excipient, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for fat emulsions as the subject drug. |
| popPK | Zakharova_2019 | irrelevant | 0 | 0 | The study focuses on the physiological effects of a multi-drug composition for inducing torpor in rats, where lipid emulsion is only a vehicle, and no pharmacokinetic parameters for fat emulsions are reported. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of progesterone (the drug) in a lipid emulsion formulation, not the pharmacokinetics of the fat emulsion itself. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of pharmacodynamics or fat emulsions. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
