<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;calcium compounds&quot;}]"></div>

# calcium compounds

- **generic name:** calcium compounds
- **ATC codes:** `A07XA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Calcium compounds are used as antidiarrheal agents for intestinal conditions. They are classified under the alimentary tract and metabolism group as other antidiarrheals, indicating ongoing use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12548019](https://www.wikidata.org/wiki/Q12548019) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:18 | 7:20 | 0/0/0 | 0/0/0 | 0/0/0 | 249,761/7,024 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 7/21 | 27/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 202 matched, 96 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2022.pdf` | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | popPK | 10 | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) | [35447502](https://pubmed.ncbi.nlm.nih.gov/35447502) | The study reports quantitative population pharmacokinetic parameters (clearance and volume of distribution) for calcium chloride in humans. |
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The study reports a population pharmacokinetic model for intravenous calcium with specific numeric values for clearance, volume, and half-life. |
| `Wiria_2020.pdf` | Wiria M et al., Relative bioavailability and pharmacoki…, Pharmacology research & per… (2020) | popPK | 8 | [10.1002/prp2.589](https://doi.org/10.1002/prp2.589) | [32302064](https://pubmed.ncbi.nlm.nih.gov/32302064) | The study reports relative bioavailability and PK comparison (Cmax, AUC ratios) for calcium compounds in humans, but specific absolute numeric values for clearance, volume, or half-life are not provided in the text. |

<sub>queue written 2026-10-04T20:18:15.573673+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1992 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amlodipine, a specific dihydropyridine calcium channel blocker, not for the general class of calcium compounds or elemental calcium. |
| popPK | Abernethy_1994 | irrelevant | 0 | 0 | The study investigates amlodipine, a specific dihydropyridine calcium channel blocker, rather than the general class of calcium compounds (e.g., calcium supplements or salts) as the subject drug. |
| popPK | Aleandri_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bupivacaine from liposomal depots, with calcium salts used only as a formulation excipient to induce aggregation, not as the subject drug. |
| popPK | Aoe_2018 | irrelevant | 0 | 0 | The paper is a review of calcium characteristics in milk and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for calcium compounds. |
| popPK | Aoki_2006 | irrelevant | 0 | 0 | The study focuses on calcium bioavailability and bone strength in rats, not on pharmacokinetic disposition parameters (CL, V, ka) for a specific calcium compound. |
| popPK | Aubert_2018 | irrelevant | 0 | 0 | The paper is an archaeological study dating cave art using uranium-series dating of calcium carbonate deposits, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | Bae_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of esomeprazole, with calcium carbonate serving only as a co-administered antacid component rather than the subject drug. |
| popPK | Barna_2010 | irrelevant | 0 | 0 | The paper is a review of sevelamer carbonate, not a pharmacokinetic study of calcium compounds, and contains no quantitative PK parameters for calcium. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | The paper is a collection of abstracts from an intensive care medicine symposium focusing on sepsis, infections, and coagulation, with no mention of calcium compounds or pharmacokinetic parameters. |
| popPK | Beal_1976 | irrelevant | 0 | 0 | The study investigates the physiological effect of vasopressin on renal calcium excretion in sheep, not the pharmacokinetic disposition parameters (CL, V, ka) of calcium compounds as a drug. |
| popPK | Benet_1985 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for bepridil, not calcium_compounds. |
| popPK | Bingtong_2020 | irrelevant | 0 | 0 | The study focuses on the identification and characterization of calcium-binding peptides from tilapia gelatin, not on the pharmacokinetic parameters (CL, V, etc.) of calcium compounds in a biological system. |
| popPK | Borsa_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fosfomycin (specifically calcium fosfomycin), not calcium compounds as the subject drug. |
| popPK | Bose_2016 | irrelevant | 0 | 0 | The study uses chlorpheniramine maleate as the model drug to assess the performance of calcium alginate pellets, so calcium is an excipient/comparator rather than the subject drug for PK parameter estimation. |
| popPK | Caldas_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from toothpaste, not calcium compounds. |
| popPK | Calder_2025 | irrelevant | 0 | 0 | The paper is a systematic review of Vitamin C (ascorbic acid/calcium ascorbate) formulations, not a pharmacokinetic study of calcium compounds as a subject drug for calcium disposition. |
| popPK | Candia_2018 | irrelevant | 0 | 0 | The study investigates the effect of calcium salts on iron bioavailability (absorption of iron), not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium itself. |
| popPK | Caple_1982 | irrelevant | 0 | 0 | The study is a nutritional assessment of calcium and phosphorus excretion in horses, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | Colombo_2025 | irrelevant | 0 | 0 | The study focuses on citrate anticoagulation and ion exchange resins in swine, not the pharmacokinetics of calcium compounds as a drug. |
| popPK | Corte-Real_2017 | irrelevant | 0 | 0 | The study investigates the effect of calcium supplementation on carotenoid bioavailability, not the pharmacokinetics of calcium compounds themselves. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | The study investigates the physiological effects of sodium citrate on exercise performance and blood chemistry, not the pharmacokinetics of calcium compounds. |
| popPK | Dodion_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of loop diuretics (torasemide and furosemide), not calcium compounds; calcium gluconate is only used as a compensatory infusion. |
| popPK | Drysdale_2024 | irrelevant | 0 | 0 | The study measures calcium digestibility and bioavailability in chickens, not pharmacokinetic parameters (CL, V, ka) for a drug. |
| popPK | Frost_1992 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate on the pharmacokinetics of ciprofloxacin, not the pharmacokinetics of calcium compounds themselves. |
| popPK | Geetha_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sesamol, not calcium compounds (calcium carbonate is only an excipient). |
| popPK | Hansen_1996 | irrelevant | 2 | 0 | The study reports intestinal absorption percentages (bioavailability) using a double-isotope method but does not provide compartmental pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Hariton_1991 | irrelevant | 2 | 2 | The study measures the ocular distribution of inorganic calcium ions (45Ca) rather than the pharmacokinetics of a specific calcium compound drug (e.g., calcium gluconate) in a systemic compartmental model. |
| popPK | Idris_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxytetracycline (OTC) using calcium carbonate nanoparticles as a delivery vehicle, not the pharmacokinetics of calcium compounds as the subject drug. |
| popPK | Ishaq_2024 | irrelevant | 0 | 0 | The study focuses on the formulation and delivery of Darifenacin using calcium carbonate as an excipient, not on the pharmacokinetics of calcium compounds. |
| popPK | Jain_2025 | relevant | 4 | 6 | The study reports absorption parameters (Cmax, Tmax, AUC) for calcium carbonate in humans, but lacks standard disposition parameters like clearance (CL) or volume of distribution (V) required for a full PK model. |
| popPK | Joy_2006 | irrelevant | 0 | 0 | The paper is a review of lanthanum carbonate, not a pharmacokinetic study of calcium compounds. |
| popPK | Kaisbain_2023 | irrelevant | 0 | 0 | The paper is a case report on the clinical use of calcium gluconate to treat verapamil-induced hypotension and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for calcium compounds. |
| popPK | Karpf_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of TransCon PTH (a prodrug for PTH(1-34)), not calcium compounds. |
| popPK | Kashyap_2013 | irrelevant | 0 | 0 | The paper is a clinical review of pulmonary alveolar microlithiasis (a disease involving calcium phosphate deposition) and does not report pharmacokinetic parameters for calcium compounds. |
| popPK | Katsube_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lusutrombopag, with calcium carbonate serving only as a co-administered agent to assess interaction effects, not as the subject drug. |
| popPK | Kiewiet_1991 | irrelevant | 0 | 0 | The study investigates the effect of calcium on heavy metal uptake in earthworms, not the pharmacokinetics of calcium compounds. |
| popPK | Knight_1979 | irrelevant | 0 | 0 | The study examines renal transport of oxalate in rats, with calcium used only as a co-infused agent to test its effect on oxalate excretion, not as the subject drug for PK parameter estimation. |
| popPK | Koeppert_2021 | irrelevant | 0 | 0 | The study investigates the clearance of calciprotein particles (CPP/CPM) and fetuin A, not the pharmacokinetics of calcium compounds as a drug subject. |
| popPK | Kramer_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium citrate, not calcium compounds, although calcium chloride was co-administered. |
| popPK | Kramers_2022 | irrelevant | 0 | 0 | The paper describes (U,Th)-He dating methods for Pleistocene carbonates and does not involve the pharmacokinetics of calcium compounds. |
| popPK | Krishna_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of raltegravir, with calcium carbonate serving only as a co-administered antacid (comparator/interactor), not as the subject drug. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | The study investigates the association between bone turnover markers and BPPV, reporting serum calcium levels as a clinical biomarker rather than pharmacokinetic parameters (CL, V, ka) for calcium compounds as a drug. |
| popPK | Lehto_1994 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate on the pharmacokinetics of lomefloxacin, not the pharmacokinetics of calcium compounds themselves. |
| popPK | Leonard_1982 | irrelevant | 0 | 0 | The paper is a review of calcium-channel blocking agents (verapamil, nifedipine, diltiazem), not a pharmacokinetic study of calcium compounds as the subject drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of exenatide (a GLP-1 agonist) delivered via microneedles, not calcium compounds; calcium chloride is used only as a cross-linking excipient. |
| popPK | Livio_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin (the active drug), not for calcium compounds (which serve as the inert carrier material). |
| popPK | Lomaestro_1993 | irrelevant | 0 | 0 | The study investigates the effect of calcium on the pharmacokinetics of ciprofloxacin, not the pharmacokinetic parameters of calcium itself. |
| popPK | Mailafiya_2020 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of curcumin-loaded calcium carbonate nanoparticles on lead toxicity in rats, reporting biochemical and histological markers rather than pharmacokinetic parameters (CL, V, etc.) for calcium compounds. |
| popPK | Mandera_2023 | irrelevant | 0 | 0 | The paper describes the biocrystallization mechanisms of calcium carbonate in earthworms, not the pharmacokinetics of a drug. |
| popPK | McInnes_1980 | irrelevant | 0 | 0 | The study investigates renal tubular reabsorption of amino acids and phosphate in rats using calciotropic agents, but does not report pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Meredith_1992 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of amlodipine, a specific dihydropyridine calcium channel blocker, not the general class of calcium compounds or elemental calcium. |
| popPK | Mititelu_2022 | irrelevant | 0 | 0 | The paper is a preformulation and physicochemical characterization study of calcium lactate tablets, reporting no in vivo or in vitro pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Monchi_2017 | irrelevant | 0 | 0 | The paper discusses citrate pathophysiology and its effect on ionized calcium levels, but does not report pharmacokinetic parameters (CL, V, etc.) for calcium compounds. |
| popPK | Montefalcone_2022 | irrelevant | 0 | 0 | The paper is a review of serpulid reefs and their ecological roles, containing no pharmacokinetic data for calcium compounds. |
| popPK | Neven_2020 | irrelevant | 0 | 0 | The study focuses on the renoprotective effects of sucroferric oxyhydroxide and calcium carbonate as phosphate binders, reporting clinical outcomes (creatinine, phosphorus) rather than pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Nicar_1985 | irrelevant | 2 | 0 | The study measures calcium bioavailability via urinary excretion rather than reporting compartmental pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Orlowski_1990 | irrelevant | 2 | 0 | The study compares administration routes for multiple emergency drugs including calcium chloride in dogs, but the evidence provided contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for calcium compounds. |
| popPK | Padhi_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinacalcet, with calcium carbonate serving only as a co-administered agent/comparator, not the subject drug. |
| popPK | Pandey_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate (MTX) loaded in calcium phosphate nanoparticles, not the pharmacokinetics of calcium compounds themselves. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain pharmacokinetic data for calcium compounds. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on the valorization of marine by-products for cosmetics and does not report any pharmacodynamic or exposure-response data for calcium compounds. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review of kidney stone pathophysiology and treatment, not a pharmacokinetic study of calcium compounds. |
| popPK | Petrovici_2022 | irrelevant | 0 | 0 | The paper describes an analytical method (HPLC-ESI-MS) for quantifying zoledronic acid and its calcium complexes, but does not report pharmacokinetic parameters (CL, V, etc.) for calcium compounds. |
| popPK | Pointillart_1995 | irrelevant | 0 | 0 | The study focuses on mineral bioavailability and bone mineral content in pigs, not on the pharmacokinetic disposition parameters (CL, V, ka) of calcium compounds. |
| popPK | Quintero-García_2020 | irrelevant | 0 | 0 | The study measures calcium bioavailability (absorption percentage and balance) in rats, not pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Reddy_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release of montelukast sodium, not the pharmacokinetics of calcium compounds. |
| popPK | Rădulescu_2019 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of lead (Pb) and its interaction with calcium, but calcium is a co-factor/comparator, not the subject drug for which PK parameters are reported. |
| popPK | SEITZ_1964 | irrelevant | 0 | 0 | The study investigates the effect of hydrochlorothiazide on calcium excretion and metabolism, not the pharmacokinetic parameters (CL, V, etc.) of calcium compounds as a subject drug. |
| popPK | Saetang_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of peptide-calcium binding and Caco-2 transport, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for calcium compounds. |
| popPK | Saveleva_2024 | irrelevant | 0 | 0 | The study focuses on the delivery of clobetasol propionate using calcium carbonate carriers, not the pharmacokinetics of calcium compounds as a drug. |
| popPK | Sell_2022 | irrelevant | 0 | 0 | The text is a clinical review of parathyroid disorders and does not report any pharmacokinetic parameters for calcium compounds. |
| popPK | Setnikar_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fluoride (from monofluorophosphate), not for calcium compounds, which are only co-administered supplements. |
| popPK | Shen_2021 | irrelevant | 0 | 0 | The study analyzes fluoride bioavailability in dentifrices and does not report pharmacokinetic parameters for calcium compounds. |
| popPK | Shen_2022 | irrelevant | 0 | 0 | The study focuses on oridonin-loaded calcium phosphate nanoparticles as a drug delivery system for lung cancer, not on the pharmacokinetics of calcium compounds as the subject drug. |
| popPK | Si_2023 | irrelevant | 2 | 0 | The study focuses on the binding mechanism and qualitative bioavailability of a calcium complex, lacking quantitative pharmacokinetic parameters (CL, V, ka) for the drug itself. |
| popPK | Singh_2001 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate on the pharmacokinetics of levothyroxine, not the pharmacokinetics of calcium itself. |
| popPK | Som_2019 | irrelevant | 0 | 0 | The study focuses on the therapeutic and imaging properties of calcium carbonate nanoparticles in tumor models, not on the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds. |
| popPK | Taufield_1987 | irrelevant | 0 | 0 | The study measures urinary calcium excretion in preeclamptic women to diagnose the condition, rather than characterizing the pharmacokinetic disposition of a calcium compound drug. |
| popPK | Teramura_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of barnidipine hydrochloride, a calcium channel blocker, not calcium compounds as the subject drug. |
| popPK | Toba_1999 | irrelevant | 0 | 0 | The study measures calcium bioavailability and bone mineral density in rats, not pharmacokinetic parameters (CL, V, ka) for a specific calcium drug compound. |
| popPK | Tokuma_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nilvadipine, a specific dihydropyridine calcium channel blocker, rather than calcium compounds (minerals/salts) as the subject drug. |
| popPK | Toll_1976 | irrelevant | 0 | 0 | The study investigates the mechanical response of heart muscle to calcium concentration changes (physiology/pharmacodynamics), not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds as a drug. |
| PD | Toll_1976 | not_relevant | 4 | 2 | The paper describes the qualitative shape of the dose-response curve (nonlinearity) and its effect on transient dynamics, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Torres_2024 | irrelevant | 0 | 0 | The study measures calcium bioavailability via femur ash content in mice, which is a nutritional/balance study, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| popPK | Vagianos_1990 | irrelevant | 0 | 0 | The study focuses on the toxicology and antidotal treatment of citrate intoxication in pigs, reporting physiological outcomes and ionized calcium levels rather than pharmacokinetic disposition parameters (CL, V, ka) for calcium compounds. |
| popPK | Verhoef_2021 | irrelevant | 2 | 1 | The study measures dissolution rates and serum calcium concentrations in dairy cattle but does not report compartmental pharmacokinetic parameters (CL, V, ka) for the calcium compounds. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper describes a hydrogel material for contraception where calcium chloride is a component, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | Warneke_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from sodium monofluorophosphate, not calcium compounds. |
| popPK | Wiria_2020 | relevant | 8 | 2 | The study reports relative bioavailability and PK comparison (Cmax, AUC ratios) for calcium compounds in humans, but specific absolute numeric values for clearance, volume, or half-life are not provided in the text. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The study focuses on the characterization and in vitro/in vivo functional effects (absorption promotion, prebiotic) of a calcium chelate, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the calcium compound itself. |
| popPK | Zenk_2018 | irrelevant | 2 | 0 | The study reports physiological markers of calcium metabolism (urinary clearance, PTH levels) rather than pharmacokinetic disposition parameters (CL, V, ka) for a specific calcium compound. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is an ecological study on soil phosphorus biogeochemistry and does not involve pharmacokinetics or calcium compounds as a drug. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study is an in-vitro food science investigation of emulsion stability and bioaccessibility, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper is a review on oral delivery of proteins and peptides and does not report pharmacokinetic parameters for calcium compounds. |
| popPK | da_2019 | irrelevant | 0 | 0 | The study evaluates calcium bioavailability and inflammation in rats but does not report pharmacokinetic parameters (CL, V, ka, etc.) for calcium compounds. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
