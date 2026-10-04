<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;magnesium carbonate&quot;}]"></div>

# magnesium carbonate

- **generic name:** magnesium carbonate
- **ATC codes:** `A02AA01`, `A06AD01`, `V03AE04`
- **DrugBank:** [DB09481](https://go.drugbank.com/drugs/DB09481) · **PubChem:** [CID 11029](https://pubchem.ncbi.nlm.nih.gov/compound/11029)
- **molar mass:** 84.314 g/mol (CMgO3) — DrugBank
- **groups:** approved

## About

**Description.** Magnesium carbonate, also known as magnesite, is a common over the counter remedy for heartburn and upset stomach caused by overproduction of acid in the stomach [FDA Label].

**Indication.** Used as an over the counter antacid [L593]. It is also used in combination with [Citric acid] and [Gluconolactone] for use within the lower urinary tract in the dissolution of bladder calculi. [L52555]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:27 | 4:27 | 0/0/0 | 0/0/0 | 0/0/0 | 168,772/4,068 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 4/24 | 23/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_carbonate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…About 40-60% of magnesium is absorbed following oral administration…”</sub> | prose |
| excretion | kidney | <sub>“…Primarily eliminated in urine…”</sub> | prose |

<sub>Actors without a tissue in the table: CNNM2 (substrate), GRIN1 (blocker), SLC41A3 (substrate), TRPM6 (substrate), TRPM7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 433 matched, 73 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adoley_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for plant extracts (Azadirachta indica and Khaya senegalensis) but does not report any pharmacodynamic or exposure-response relationship for magnesium carbonate, which is used only as an excipient. |
| popPK | Aideloje_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of halofantrine, with magnesium carbonate acting only as a co-administered antacid/comparator, not as the subject drug. |
| popPK | Arayne_2007 | irrelevant | 0 | 0 | The study is an in-vitro dissolution/interaction study of cephradine with magnesium carbonate, not a pharmacokinetic study of magnesium carbonate. |
| popPK | Armstrong_1982 | irrelevant | 0 | 0 | The paper describes a physical compression study of powders including magnesium carbonate, not a pharmacokinetic study. |
| popPK | Bamford_2021 | irrelevant | 0 | 0 | The paper describes the physical and cosmetic properties of mesoporous magnesium carbonate (surface area, oil/moisture uptake, mattifying effect) and contains no pharmacokinetic data. |
| PD | Barraclough_2025 | not_relevant | 0 | 0 | The paper is a multicentre survey of bowel preparation adequacy (BBPS scores) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for magnesium carbonate. |
| popPK | Barros_2023 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of magnesium carbonate supplementation in rats with CKD, reporting functional and histological outcomes rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Botan-Neto_2024 | irrelevant | 0 | 0 | The paper is a materials science study on the crystal structure and high-pressure phase transitions of magnesium carbonate (nesquehonite), not a pharmacokinetic study. |
| popPK | Cometa_2023 | irrelevant | 0 | 0 | The paper describes the development of a drug delivery composite for Boswellia serrata extract, not the pharmacokinetics of magnesium carbonate. |
| PD | Cometa_2023 | not_relevant | 0 | 0 | The paper focuses on the material characterization and in vitro bioactivity of Boswellia serrata extract-loaded composites, not on the pharmacokinetics or pharmacodynamics of magnesium carbonate. |
| popPK | Daugirdas_2011 | irrelevant | 0 | 0 | The paper discusses phosphate-binding capacity and equivalent dosing, not the pharmacokinetic disposition parameters (CL, V, ka) of magnesium carbonate. |
| popPK | Devasahayam_2021 | irrelevant | 0 | 0 | The paper is a materials science study on cement decarbonization and calcination of magnesium carbonate, not a pharmacokinetic study. |
| popPK | Dłuzniewski_1994 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of magnesium carbonate for arrhythmia prevention and does not report any pharmacokinetic parameters. |
| popPK | Engineer_1970 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Evsanaa_2015 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of magnesium carbonate as a phosphate binder, reporting serum phosphate and magnesium levels rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Feriani_1993 | irrelevant | 0 | 0 | The study evaluates a peritoneal dialysis solution where magnesium carbonate is mentioned only as a precipitate to be avoided, not as the subject drug for pharmacokinetic analysis. |
| popPK | Feriani_1998 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of a peritoneal dialysis solution containing magnesium carbonate as a buffer, not the pharmacokinetics of magnesium carbonate as a drug. |
| popPK | Feriani_2012 | irrelevant | 0 | 0 | The paper is a review of bicarbonate solutions for peritoneal dialysis and does not report pharmacokinetic parameters for magnesium carbonate. |
| popPK | Galeazzi_1977 | irrelevant | 0 | 0 | The study investigates the effect of magnesium carbonate (as an antacid) on the bioavailability of indomethacin, making magnesium carbonate a co-administered agent rather than the subject drug for PK parameter estimation. |
| popPK | Gault_1993 | irrelevant | 0 | 0 | The paper describes the composition of urinary tract stones (calcium carbonate/dolomite) and is not a pharmacokinetic study of magnesium carbonate. |
| popPK | Grakovskaia_1978 | irrelevant | 0 | 0 | The study is an in-vitro dissolution study of tetracycline hydrochloride where magnesium carbonate is used only as a comparator excipient, not as the subject drug. |
| popPK | Gómez_2021 | irrelevant | 0 | 0 | The study investigates celecoxib as the subject drug using magnesium carbonate as an excipient/carrier, and the data are in vitro (dissolution and Caco-2 permeation), not pharmacokinetic parameters for magnesium carbonate. |
| popPK | Han_2022 | irrelevant | 0 | 0 | The paper investigates the synthesis and biological effects (antibacterial, cytotoxic, plant growth) of dolomite nanoparticles, not the pharmacokinetics of magnesium carbonate. |
| PD | Hug_2013 | not_relevant | 0 | 0 | The paper describes an electrochemical engineering process for struvite precipitation and does not report any pharmacodynamic or exposure-response relationship for magnesium carbonate. |
| popPK | Hurlbut_1997 | irrelevant | 0 | 0 | The paper describes a colorimetric analytical method for determining selenium in mineral premixes, where magnesium carbonate is only mentioned as a minor component/additive, and contains no pharmacokinetic data. |
| popPK | Hutchison_2012 | irrelevant | 0 | 0 | The paper is a clinical review of magnesium carbonate as a phosphate binder in CKD and does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Ivanovic_2022 | irrelevant | 0 | 0 | The study reports changes in serum magnesium concentrations (biochemical status) rather than pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| PD | Ivanovic_2022 | not_relevant | 2 | 1 | The study reports qualitative changes in magnesium levels for different supplements but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters (e.g., Emax, EC50) for magnesium carbonate. |
| popPK | Kasprzak_1987 | irrelevant | 0 | 0 | The study is a carcinogenesis and immunology investigation in rats, not a pharmacokinetic study, and reports no disposition parameters for magnesium carbonate. |
| PD | Katsiotis_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro release of celecoxib using mesoporous magnesium carbonate as a carrier, containing no pharmacodynamic or exposure-response analysis. |
| PD | Katsiotis_2023 | not_relevant | 0 | 0 | The paper focuses on the mechanical properties and printability of 3D-printed filaments containing mesoporous magnesium carbonate, not on pharmacokinetics or pharmacodynamics. |
| popPK | Katsiotis_2024 | irrelevant | 0 | 0 | The study focuses on the 3D printing formulation and dissolution of ibuprofen-loaded mesoporous magnesium carbonate, not the pharmacokinetics of magnesium carbonate itself. |
| popPK | Kemal_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nemtabrutinib, not magnesium carbonate. |
| popPK | Khalid_2025 | irrelevant | 0 | 0 | The paper evaluates the mechanical properties of tablet coatings where magnesium carbonate is used as an excipient/opacifier, not as a subject drug for pharmacokinetic analysis. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The study investigates magnesium carbonate as an alkalizing excipient to enhance the bioavailability of fenofibric acid, not as the subject drug for PK parameter estimation. |
| popPK | Lazarević_2025 | irrelevant | 0 | 0 | The study is an in vitro PAMPA experiment investigating the effect of antacids (including magnesium carbonate) on the permeability of gliclazide, not a pharmacokinetic study of magnesium carbonate itself. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | The paper describes the use of magnesium carbonate as a precipitate to strengthen aerobic granules in wastewater treatment, not a pharmacokinetic study of magnesium carbonate as a drug. |
| popPK | Lo_1980 | irrelevant | 0 | 0 | The study is a bioavailability/bioassay study measuring serum and bone magnesium levels, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for magnesium carbonate. |
| popPK | Luo_2023 | irrelevant | 0 | 0 | The paper describes a magnesium carbonate hydroxide composite membrane for lithium-ion batteries, not the pharmacokinetics of magnesium carbonate as a drug. |
| popPK | McAuley_2021 | irrelevant | 0 | 0 | The paper investigates the antiviral properties of liquid chalk (magnesium carbonate) against viruses in vitro and contains no pharmacokinetic data. |
| popPK | Naggar_1977 | irrelevant | 0 | 0 | The study is an in-vitro adsorption study of corticosteroids on antacids, where magnesium carbonate is a co-administered agent/adsorbent, not the subject drug for PK analysis. |
| popPK | Naggar_1981 | irrelevant | 0 | 0 | The study is an in vitro adsorption/dissolution study of diazepam with magnesium carbonate as an excipient, not a pharmacokinetic study of magnesium carbonate. |
| popPK | Neradova_2017 | irrelevant | 0 | 0 | The study is an in vitro binding experiment of vitamin K2 with phosphate binders, not a pharmacokinetic study of magnesium carbonate. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report pharmacokinetic parameters for magnesium carbonate. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for magnesium carbonate. |
| popPK | Owen_2021 | irrelevant | 0 | 0 | The study investigates the environmental stability of a coronavirus in the presence of magnesium carbonate (climbing chalk) and does not report any pharmacokinetic parameters for magnesium carbonate. |
| PD | Pal_2023 | not_relevant | 0 | 0 | The paper describes an analytical method (ICP-MS) for quantifying magnesium and aluminium in pharmaceutical dosage forms, not a pharmacodynamic or exposure-response study. |
| popPK | Renfert_2019 | irrelevant | 0 | 0 | The study focuses on the passage time of a bacteriophage in bearded dragons, and magnesium carbonate is only mentioned as a buffer agent, not as the subject drug for PK analysis. |
| popPK | Robinson_1995 | irrelevant | 0 | 0 | The paper is a review of enamel biochemistry and mineralization, discussing magnesium and carbonate as components of the mineral phase, not as a pharmacokinetic study of magnesium carbonate. |
| popPK | Scheller_2021 | irrelevant | 0 | 0 | The paper is a geological review of magnesium carbonate mineral formation on Earth and Mars, not a pharmacokinetic study of the drug magnesium carbonate. |
| popPK | Schumacher_2019 | irrelevant | 0 | 0 | The study is an in vitro investigation of phosphate binding capacity, not a pharmacokinetic study reporting disposition parameters for magnesium carbonate. |
| popPK | Spiegel_2007 | irrelevant | 0 | 0 | The study evaluates magnesium carbonate as a phosphate binder for efficacy (serum phosphorus control) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sultana_2001 | irrelevant | 0 | 0 | The study investigates the effect of magnesium carbonate on the in vitro availability of cefuroxime, making magnesium carbonate a co-administered agent rather than the subject drug for PK parameter estimation. |
| popPK | Tempio_1980 | irrelevant | 0 | 0 | The study investigates the physical flocculation properties of magnesium carbonate suspensions, not its pharmacokinetics. |
| popPK | Vassar_1999 | irrelevant | 0 | 0 | The paper investigates the photothermal mechanism of laser lithotripsy on kidney stones, where magnesium carbonate is mentioned only as a chemical decomposition product, not as a drug subject to pharmacokinetic analysis. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nimesulide, using magnesium carbonate only as an excipient for solid dispersion preparation, not as the subject drug. |
| popPK | West_2014 | irrelevant | 0 | 0 | The paper is a historical review of Joseph Black's discovery of carbon dioxide and latent heat, containing no pharmacokinetic data for magnesium carbonate. |
| popPK | Williams_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of eltrombopag, with magnesium carbonate used only as a component of an antacid co-administered to assess food/drug interactions. |
| popPK | Yafout_2022 | irrelevant | 0 | 0 | The study evaluates the acid-neutralizing capacity (ANC) of antacids in vitro, not the pharmacokinetic disposition parameters of magnesium carbonate. |
| PD | Yafout_2022 | not_relevant | 0 | 0 | The study evaluates in-vitro acid-neutralizing capacity (ANC) and product properties (price, sodium content) of antacids, not in-vivo pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Yakovlev_2022 | irrelevant | 0 | 0 | The paper is a clinical review of antibiotics for cystitis where magnesium carbonate is only mentioned as an excipient in a dosage form, with no pharmacokinetic data for magnesium carbonate itself. |
| PD | Yakovlev_2022 | not_relevant | 0 | 0 | The paper is a literature review on antibiotic selection for cystitis and does not report any pharmacodynamic or exposure-response data for magnesium carbonate. |
| popPK | Yang_2018 | irrelevant | 0 | 0 | The study focuses on magnesium carbonate as a formulation excipient for ibuprofen, not as the subject drug for pharmacokinetic analysis. |
| popPK | Yatzidis_1994 | irrelevant | 0 | 0 | The study investigates the biocompatibility and ultrafiltration properties of a dialysis solution in rabbits, not the pharmacokinetics of magnesium carbonate. |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The paper describes the mechanical properties of bio-cementation materials involving magnesium carbonate synthesis, not pharmacokinetics. |
| PD | Yu_2022 | not_relevant | 0 | 0 | The paper describes a civil engineering material science study on bio-cementation using magnesium salts, not a pharmacological study of magnesium carbonate as a drug. |
| popPK | Zak_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tetracycline hydrochloride, with magnesium carbonate serving only as an additive/comparator to assess its effect on tetracycline absorption. |
| popPK | Zardán_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of celecoxib formulated with mesoporous magnesium carbonate, where magnesium carbonate acts as an excipient/carrier rather than the subject drug. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study focuses on the formulation and dissolution of ibuprofen using magnesium carbonate as a carrier, not on the pharmacokinetics of magnesium carbonate itself. |
| PD | Zhang_2016 | not_relevant | 0 | 0 | The paper investigates in vitro drug release kinetics and material characterization of ibuprofen loaded in magnesium carbonate, containing no pharmacodynamic or exposure-response data. |
| popPK | Zhang_2016_2 | irrelevant | 0 | 0 | The study investigates magnesium carbonate as a drug delivery carrier for other drugs (celecoxib, cinnarizine, griseofulvin) and does not report pharmacokinetic parameters for magnesium carbonate itself. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a materials science study on the carbonation of brucite (magnesium hydroxide) to form magnesium carbonate phases, containing no pharmacokinetic data. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper describes the synthesis of a magnesium carbonate-based adsorbent for heavy metal removal, not the pharmacokinetics of magnesium carbonate as a drug. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper describes a magnesium carbonate-based nanozyme for cancer radioimmunotherapy and does not report pharmacokinetic parameters for magnesium carbonate as a drug. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper describes a materials science study on hydrogel carriers using magnesium carbonate as a structural component, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
