<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;calcium compounds&quot;}]"></div>

# calcium compounds

- **generic name:** calcium compounds
- **ATC codes:** `A07XA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 11:08 | 8:24 | 0/0/0 | 0/0/0 | 0/0/0 | 66,007/2,589 | ollama / qwen3.8:27b-mtp-q8_0 | 28 | 1/5 | 27/1 | 0 |

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

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2022.pdf` | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | popPK | 10 | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) | [35447502](https://pubmed.ncbi.nlm.nih.gov/35447502) | The study reports quantitative population pharmacokinetic parameters (clearance and volume of distribution) for calcium chloride directly in the text. |
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The paper reports a population pharmacokinetic model for intravenous calcium compounds with explicit numeric values for clearance, volume, and half-life in the text. |

<sub>queue written 2026-09-26T11:08:04.000740+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1992 | irrelevant | 0 | 0 | The study focuses on amlodipine, a specific dihydropyridine calcium channel blocker, rather than the general class of calcium compounds (e.g., calcium salts) as the subject drug. |
| popPK | Abernethy_1994 | irrelevant | 0 | 0 | The study focuses on amlodipine, a specific dihydropyridine calcium channel blocker, rather than the general class of calcium compounds, and does not report population PK parameters for calcium itself. |
| popPK | Aleandri_2022 | irrelevant | 0 | 0 | The study focuses on bupivacaine as the subject drug, with calcium salts used only as a formulation excipient to modulate liposome aggregation, and no PK parameters for calcium compounds are reported. |
| popPK | Aoe_2018 | irrelevant | 0 | 0 | The paper discusses the composition and bioavailability of calcium in milk but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for a specific calcium compound. |
| popPK | Aoki_2006 | irrelevant | 2 | 0 | The study focuses on calcium bioavailability and bone strength in rats rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for calcium compounds. |
| popPK | Aubert_2018 | irrelevant | 0 | 0 | The paper is an archaeological study on the dating of Palaeolithic cave art in Borneo, not a pharmacokinetic study of calcium compounds. |
| popPK | Bae_2021 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of esomeprazole, with calcium carbonate serving only as a co-administered antacid component rather than the subject drug for PK parameter estimation. |
| popPK | Barna_2010 | irrelevant | 0 | 0 | The paper is a review of sevelamer carbonate, not a pharmacokinetic study of calcium compounds, and contains no quantitative PK parameters for calcium. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | The paper is a conference abstract collection on sepsis and critical care, containing no pharmacokinetic data for calcium compounds. |
| popPK | Beal_1976 | irrelevant | 0 | 0 | The study investigates the physiological effect of vasopressin on calcium excretion in sheep, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds as a drug. |
| popPK | Benet_1985 | irrelevant | 0 | 0 | The paper studies bepridil, a specific calcium channel blocker, rather than calcium compounds (minerals/salts) as the subject drug. |
| popPK | Bingtong_2020 | irrelevant | 0 | 0 | The study focuses on the identification and characterization of calcium-binding peptides from tilapia skin gelatin, not on the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds in a biological system. |
| popPK | Borsa_1988 | irrelevant | 2 | 2 | The study focuses on fosfomycin (an antibiotic) with calcium as a salt form, not calcium compounds as the subject drug for PK characterization. |
| popPK | Bose_2016 | irrelevant | 0 | 0 | The study focuses on chlorpheniramine maleate as the model drug, with calcium acetate serving only as an excipient/disintegrant, and no PK parameters for calcium compounds are reported. |
| popPK | Caldas_2022 | irrelevant | 0 | 0 | The study focuses on fluoride bioavailability from toothpaste, not the pharmacokinetics of calcium compounds. |
| popPK | Calder_2025 | irrelevant | 0 | 0 | The paper is a systematic review of Vitamin C (ascorbic acid/calcium ascorbate) bioavailability, not a pharmacokinetic study of calcium compounds as a subject drug for disposition parameters. |
| popPK | Candia_2018 | irrelevant | 0 | 0 | The study investigates the effect of calcium salts on iron bioavailability (absorption of iron), not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds themselves. |
| popPK | Caple_1982 | irrelevant | 0 | 0 | The study is a nutritional assessment of calcium and phosphorus excretion in horses, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | Colombo_2025 | irrelevant | 0 | 0 | The study focuses on citrate anticoagulation and ion exchange resins, using calcium chloride only as a replacement agent to maintain physiological levels, rather than reporting pharmacokinetic parameters for calcium compounds as the subject drug. |
| popPK | Corte-Real_2017 | irrelevant | 0 | 0 | The study investigates the effect of calcium supplementation on carotenoid bioavailability, not the pharmacokinetics of calcium itself. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | The study investigates the physiological effects of sodium citrate on exercise performance and blood chemistry, not the pharmacokinetics of calcium compounds. |
| popPK | Dodion_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of loop diuretics (torasemide and furosemide), and calcium gluconate is only used as a compensatory infusion, not the subject drug. |
| popPK | Drysdale_2024 | irrelevant | 0 | 0 | The study measures calcium digestibility and bioavailability in chickens, not pharmacokinetic parameters (CL, V, ka) for a drug. |
| popPK | Frost_1992 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate on the bioavailability of ciprofloxacin, making calcium a co-administered agent rather than the subject drug for PK parameter estimation. |
| popPK | Geetha_2015 | irrelevant | 0 | 0 | The study focuses on sesamol as the subject drug, with calcium carbonate serving only as an excipient in the formulation, and no PK parameters for calcium compounds are reported. |
| popPK | Hansen_1996 | irrelevant | 2 | 0 | The study reports intestinal absorption percentages (bioavailability) rather than standard pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Hariton_1991 | irrelevant | 2 | 1 | The study focuses on ocular ion distribution and penetration percentages rather than standard systemic pharmacokinetic parameters (CL, V, ka) for calcium compounds as a drug. |
| popPK | Idris_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxytetracycline (OTC) as the subject drug, using calcium carbonate nanoparticles only as a delivery vehicle, not as the drug of interest. |
| popPK | Ishaq_2024 | irrelevant | 0 | 0 | The study focuses on the formulation and delivery of Darifenacin using calcium carbonate as an excipient, not on the pharmacokinetics of calcium compounds themselves. |
| popPK | Jain_2025 | relevant | 4 | 5 | The study reports basic non-compartmental PK parameters (Cmax, Tmax, AUC) for calcium carbonate, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for high relevance. |
| popPK | Joy_2006 | irrelevant | 0 | 0 | The paper is a review of lanthanum carbonate, not a pharmacokinetic study of calcium compounds, and contains no quantitative PK parameters for the subject drug. |
| popPK | Kaisbain_2023 | irrelevant | 0 | 0 | The paper is a case report describing the clinical use of calcium gluconate to treat verapamil-induced hypotension and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for calcium compounds. |
| popPK | Karpf_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of TransCon PTH (a PTH prodrug), not calcium compounds, and calcium is only measured as a pharmacodynamic endpoint. |
| popPK | Kashyap_2013 | irrelevant | 0 | 0 | The paper is a clinical review of pulmonary alveolar microlithiasis (a lung disease) and does not report pharmacokinetic parameters for calcium compounds. |
| popPK | Katsube_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lusutrombopag, with calcium carbonate serving only as a co-administered agent to assess interaction effects, not as the subject drug. |
| popPK | Kiewiet_1991 | irrelevant | 0 | 0 | The study investigates the effect of calcium on heavy metal uptake in earthworms, not the pharmacokinetics of calcium compounds as a drug. |
| popPK | Knight_1979 | irrelevant | 0 | 0 | The study examines renal transport of oxalate with calcium as a co-infused agent, not the pharmacokinetics of calcium compounds. |
| popPK | Koeppert_2021 | irrelevant | 2 | 0 | The study investigates the biological clearance mechanisms of calciprotein particles (CPP/CPM) via microscopy and cell assays, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Kramer_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium citrate, not calcium compounds, which are only co-administered as a supplement. |
| popPK | Kramers_2022 | irrelevant | 0 | 0 | The paper describes geochronological methods for dating carbonates using (U,Th)-He dating and is unrelated to the pharmacokinetics of calcium compounds. |
| popPK | Krishna_2016 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate (as an antacid) on the pharmacokinetics of raltegravir, making raltegravir the subject drug and calcium a co-administered agent rather than the subject of PK parameter estimation. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | The study investigates the association between bone turnover markers and BPPV, reporting serum calcium levels and creatinine clearance, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for calcium compounds as a drug. |
| popPK | Lehto_1994 | irrelevant | 0 | 0 | The study investigates the effect of calcium carbonate on the pharmacokinetics of lomefloxacin, making calcium a co-administered agent rather than the subject drug. |
| popPK | Leonard_1982 | irrelevant | 0 | 0 | The paper is a review of calcium-channel blocking agents (verapamil, nifedipine, diltiazem), not a pharmacokinetic study of calcium compounds as the subject drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of exenatide delivered via microneedles, where calcium chloride is used only as a cross-linking excipient, not as the subject drug. |
| popPK | Livio_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tobramycin, which is the subject drug, while calcium sulfate is only the carrier material. |
| popPK | Lomaestro_1993 | irrelevant | 0 | 0 | The study investigates the effect of calcium on ciprofloxacin pharmacokinetics, making ciprofloxacin the subject drug and calcium the co-administered agent, with no PK parameters reported for calcium itself. |
| popPK | Mailafiya_2020 | irrelevant | 0 | 0 | The study focuses on the therapeutic effects of curcumin-loaded calcium carbonate nanoparticles on lead toxicity, reporting biochemical and histological outcomes rather than pharmacokinetic parameters for calcium compounds. |
| popPK | Mandera_2023 | irrelevant | 0 | 0 | The paper is a materials science study on the biocrystallization of calcium carbonate in earthworms, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | McInnes_1980 | irrelevant | 0 | 0 | The study investigates renal tubular handling of amino acids and phosphate in rats, using calcium chloride only as a co-infused agent to test calciotropic effects, rather than reporting pharmacokinetic parameters for calcium compounds. |
| popPK | Meredith_1992 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for amlodipine, a specific dihydropyridine calcium channel blocker, not for the general class of calcium compounds or elemental calcium. |
| popPK | Mititelu_2022 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation and characterization study (FTIR, XRD, thermal analysis, flow properties) of calcium lactate tablets, containing no pharmacokinetic data or disposition parameters. |
| popPK | Monchi_2017 | irrelevant | 0 | 0 | The paper discusses citrate pathophysiology and its effect on ionized calcium levels, but does not report pharmacokinetic parameters for calcium compounds. |
| popPK | Montefalcone_2022 | irrelevant | 0 | 0 | The paper is a review of serpulid reefs and their ecological roles, containing no pharmacokinetic data for calcium compounds. |
| popPK | Neven_2020 | irrelevant | 0 | 0 | The study focuses on the renoprotective effects and mineral homeostasis of phosphate binders, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds. |
| popPK | Nicar_1985 | irrelevant | 2 | 0 | The study reports bioavailability (urinary excretion) rather than compartmental pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Orlowski_1990 | irrelevant | 2 | 0 | The study compares administration routes for multiple emergency drugs including calcium chloride, but the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for calcium compounds. |
| popPK | Padhi_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinacalcet, with calcium carbonate serving only as a co-administered agent to assess drug-drug interactions, not as the subject drug. |
| popPK | Pandey_2019 | irrelevant | 2 | 0 | The study focuses on methotrexate (MTX) as the subject drug with calcium phosphate nanoparticles as a delivery vehicle, and no quantitative PK parameters (CL, V, etc.) for calcium compounds are reported. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not report pharmacokinetic parameters for calcium compounds. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on the valorization of marine by-products for cosmetics and does not report any pharmacodynamic or exposure-response data for calcium compounds. |
| popPK | Papatsoris_2025 | irrelevant | 0 | 0 | The paper is a review of kidney stone pathophysiology and treatment, not a pharmacokinetic study, and contains no PK parameters for calcium compounds. |
| popPK | Petrovici_2022 | irrelevant | 0 | 0 | The paper is an analytical method development study for zoledronic acid quantification, not a pharmacokinetic study, and calcium is only a co-factor in complex formation. |
| popPK | Pointillart_1995 | irrelevant | 0 | 0 | The study focuses on mineral bioavailability and bone content in pigs, not pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Quintero-García_2020 | irrelevant | 0 | 0 | The study measures calcium bioavailability and bone properties in rats, not pharmacokinetic parameters (CL, V, ka) for a calcium drug. |
| popPK | Reddy_2023 | irrelevant | 0 | 0 | The study focuses on Montelukast Sodium, not calcium compounds, and reports only in-vitro release data without population pharmacokinetic parameters. |
| popPK | Rădulescu_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lead, with calcium serving only as a competitive co-substrate in the model rather than the subject drug for which PK parameters are reported. |
| popPK | SEITZ_1964 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of hydrochlorothiazide on calcium excretion and does not report pharmacokinetic parameters (CL, V, ka) for calcium compounds. |
| popPK | Saetang_2026 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico investigation of peptide-calcium binding and Caco-2 transport, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for calcium compounds. |
| popPK | Saveleva_2024 | irrelevant | 0 | 0 | The study focuses on the delivery of clobetasol propionate using calcium carbonate carriers and does not report pharmacokinetic parameters for calcium compounds as the subject drug. |
| popPK | Sell_2022 | irrelevant | 0 | 0 | The text is a clinical review of parathyroid disorders and does not contain any pharmacokinetic parameters or quantitative disposition data for calcium compounds. |
| popPK | Setnikar_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fluoride (from monofluorophosphate), not for calcium compounds, which are only co-administered supplements. |
| popPK | Shen_2021 | irrelevant | 0 | 0 | The study analyzes fluoride bioavailability in dentifrices containing calcium compounds, not the pharmacokinetics of calcium compounds as a drug. |
| popPK | Shen_2022 | irrelevant | 0 | 0 | The study focuses on oridonin-loaded nanoparticles where calcium phosphate is merely a carrier material, not the subject drug, and no PK parameters for calcium compounds are reported. |
| popPK | Si_2023 | irrelevant | 2 | 0 | The study focuses on the binding mechanism and qualitative bioavailability of a calcium complex, lacking quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Singh_2001 | irrelevant | 1 | 0 | The study investigates the effect of calcium carbonate on levothyroxine absorption, making levothyroxine the subject drug and calcium a co-administered agent, with no PK parameters reported for calcium itself. |
| popPK | Som_2019 | irrelevant | 1 | 0 | The study focuses on the therapeutic and imaging properties of calcium carbonate nanoparticles in tumor models, not on the pharmacokinetic disposition parameters (CL, V, etc.) of calcium compounds as a drug. |
| popPK | Taufield_1987 | irrelevant | 0 | 0 | The study investigates urinary calcium excretion in preeclampsia and does not report pharmacokinetic parameters (CL, V, ka) for calcium compounds as a drug. |
| popPK | Teramura_1995 | irrelevant | 0 | 0 | The study investigates barnidipine hydrochloride, a specific dihydropyridine calcium channel blocker, rather than calcium compounds (minerals/salts) as the subject drug. |
| popPK | Toba_1999 | irrelevant | 2 | 1 | The study reports calcium bioavailability and bone mineral density outcomes in rats, but does not provide pharmacokinetic parameters (CL, V, ka) or compartmental models for calcium compounds. |
| popPK | Tokuma_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nilvadipine, a specific dihydropyridine calcium antagonist, rather than the general class of calcium compounds or elemental calcium. |
| popPK | Toll_1976 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac muscle physiology and calcium diffusion, not a pharmacokinetic study of calcium compounds as a drug. |
| PD | Toll_1976 | not_relevant | 4 | 2 | The paper describes the qualitative shape of the dose-response curve (nonlinearity) and its effect on transient dynamics, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Torres_2024 | irrelevant | 0 | 0 | The study measures calcium bioavailability via bone ash and calcium content in mice, not pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Vagianos_1990 | irrelevant | 2 | 0 | The study focuses on the therapeutic reversal of citrate intoxication and reports physiological outcomes (survival, ionized calcium levels) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for calcium compounds. |
| popPK | Verhoef_2021 | irrelevant | 2 | 0 | The study reports dissolution rates and serum calcium concentrations but does not provide quantitative pharmacokinetic parameters (CL, V, ka) or a compartmental model for calcium compounds. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper describes a hydrogel material for contraception where calcium chloride is a component, not a pharmacokinetic study of calcium compounds as a drug. |
| popPK | Warneke_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride (from sodium monofluorophosphate), not calcium compounds, which are only present as co-administered excipients. |
| popPK | Wiria_2020 | irrelevant | 2 | 0 | The study reports relative bioavailability and AUC/Cmax ratios for calcium salts but does not provide absolute quantitative disposition parameters (CL, V, ka) or a compartmental PK model. |
| popPK | Wu_2023 | irrelevant | 1 | 0 | The study focuses on in-vitro characterization and Caco-2 cell transport mechanisms of a calcium chelate, lacking quantitative population pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Zenk_2018 | irrelevant | 2 | 0 | The study reports physiological markers (urinary clearance, PTH levels) rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is an ecological study on soil phosphorus biogeochemistry and does not involve pharmacokinetics or calcium compounds as a drug. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a food science study on the physical stability and in-vitro bioaccessibility of calcium carbonate emulsions, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper is a review on oral delivery of proteins and peptides and does not report pharmacokinetic parameters for calcium compounds. |
| popPK | da_2019 | irrelevant | 0 | 0 | The study focuses on calcium bioavailability and inflammation in rats, not on the pharmacokinetic parameters (CL, V, ka, etc.) of a specific calcium compound drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
