<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05X&quot;,&quot;href&quot;:&quot;atc/B05X.md&quot;},{&quot;label&quot;:&quot;ammonium chloride&quot;}]"></div>

# ammonium chloride

- **generic name:** ammonium chloride
- **ATC codes:** `B05XA04`, `G04BA01`
- **DrugBank:** [DB06767](https://go.drugbank.com/drugs/DB06767) · **PubChem:** [CID 25517](https://pubchem.ncbi.nlm.nih.gov/compound/25517)
- **molar mass:** 53.491 g/mol (ClH4N) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Ammonium chloride is used as a urinary acidifier and as an electrolyte additive in intravenous solutions to help correct low chloride or metabolic alkalosis. It is an approved medicine and also approved for veterinary use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q188543](https://www.wikidata.org/wiki/Q188543) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 23:50 | 7:46 | 0/0/0 | 2/0/0 | 0/0/0 | 298,817/5,304 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/38 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Maddaiah_1994_Oxidation_of_2_14C_pyruvate](drugs/drug_ammonium_chloride/pd_Maddaiah_1994_Oxidation_of_2_14C_pyruvate.md) | Oxidation of [2-14C]pyruvate ← ammonium_chloride · inhibition effect | — | Maddaiah VT et al., Ammonium chloride inhibits pyruvate oxi…, Clinical science (London, E… (1994) | [10.1042/cs0870499](https://doi.org/10.1042/cs0870499) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Maddaiah_1994_State_3_rate](drugs/drug_ammonium_chloride/pd_Maddaiah_1994_State_3_rate.md) | State 3 rate ← ammonium_chloride · inhibition effect | — | Maddaiah VT et al., Ammonium chloride inhibits pyruvate oxi…, Clinical science (London, E… (1994) | [10.1042/cs0870499](https://doi.org/10.1042/cs0870499) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Yu_2022_RLU](drugs/drug_ammonium_chloride/pd_Yu_2022_RLU.md) | luciferase activity ← ammonium chloride · direct Emax (saturable) effect | — | Yu R et al., The development and characterization of…, Frontiers in microbiology (2022) | [10.3389/fmicb.2022.1101850](https://doi.org/10.3389/fmicb.2022.1101850) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ammonium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 151 matched, 106 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tao_2024.pdf` | Tao MT et al., Screening for frequently detected quate…, Ecotoxicology and environme… (2024) | pd | 5 | [10.1016/j.ecoenv.2024.116581](https://doi.org/10.1016/j.ecoenv.2024.116581) | [38875820](https://www.ncbi.nlm.nih.gov/pubmed/38875820) | metadata signals extractable PD data (EC50) |
| `Brosnan_2007.pdf` | Brosnan RJ et al., Ammonia has anesthetic properties, Anesthesia and analgesia (2007) | pd | 4 | [10.1213/01.ane.0000264072.97705.0f](https://doi.org/10.1213/01.ane.0000264072.97705.0f) | [17513636](https://www.ncbi.nlm.nih.gov/pubmed/17513636) | metadata signals extractable PD data (EC50) |
| `Dave_2012.pdf` | Dave G et al., Determination of detoxification to Daph…, Chemosphere (2012) | pd | 4 | [10.1016/j.chemosphere.2012.02.070](https://doi.org/10.1016/j.chemosphere.2012.02.070) | [22480943](https://www.ncbi.nlm.nih.gov/pubmed/22480943) | metadata signals extractable PD data (EC50) |
| `Doyle_1990.pdf` | Doyle C et al., The effect of pH on the toxicity of amm…, Journal of biotechnology (1990) | pd | 4 | [10.1016/0168-1656(90)90053-e](https://doi.org/10.1016/0168-1656(90)90053-e) | [1366690](https://www.ncbi.nlm.nih.gov/pubmed/1366690) | metadata signals extractable PD data (IC50) |
| `Kekez_2015.pdf` | Kekez BD et al., High levan production by Bacillus liche…, Applied biochemistry and bi… (2015) | pd | 4 | [10.1007/s12010-015-1475-8](https://doi.org/10.1007/s12010-015-1475-8) | [25592434](https://www.ncbi.nlm.nih.gov/pubmed/25592434) | metadata signals extractable PD data (EC50) |
| `Liu_2023.pdf` | Liu Y et al., Feasibility investigation and developme…, Talanta (2023) | pd | 4 | [10.1016/j.talanta.2022.124204](https://doi.org/10.1016/j.talanta.2022.124204) | [36580811](https://www.ncbi.nlm.nih.gov/pubmed/36580811) | metadata signals extractable PD data (IC50) |
| `McKinney_1993.pdf` | McKinney M et al., Pharmacological characterization of the…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8423553](https://www.ncbi.nlm.nih.gov/pubmed/8423553) | metadata signals extractable PD data (EC50) |
| `Wohnlich_1975.pdf` | Wohnlich J, Purification and some properties of rab…, Biochimie (1975) | pd | 4 | [10.1016/s0300-9084(75)80044-7](https://doi.org/10.1016/s0300-9084(75)80044-7) | [173415](https://www.ncbi.nlm.nih.gov/pubmed/173415) | metadata signals extractable PD data (sigmoid) |
| `Xu_2009.pdf` | Xu Y et al., [Growth inhibition and mechanism of cet…, Huan jing ke xue= Huanjing… (2009) | pd | 4 | not captured | [19662866](https://www.ncbi.nlm.nih.gov/pubmed/19662866) | metadata signals extractable PD data (EC50) |
| `Liu_2011.pdf` | Liu R et al., Effects of sodium bicarbonate and ammon…, Drug metabolism and pharmac… (2011) | pgx | 8 | [10.2133/dmpk.dmpk-10-rg-039](https://doi.org/10.2133/dmpk.dmpk-10-rg-039) | [21084767](https://www.ncbi.nlm.nih.gov/pubmed/21084767) | metadata signals extractable PGX data (SLC15A2, PK/PD-context) |

<sub>queue written 2026-10-05T23:45:55.550191+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ambros_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for enrofloxacin and ciprofloxacin in goats, not for ammonium chloride. |
| popPK | Aroua_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on benzimidazole synthesis and activity, where ammonium chloride is used only as a chemical catalyst, not as a subject drug for pharmacokinetic analysis. |
| PD | Aroua_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for synthesized benzimidazole compounds, not for ammonium chloride, which is used only as a catalyst in the synthesis. |
| popPK | Barbhaiya_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cinoxacin, using ammonium chloride only as a co-administered agent to alter urinary pH. |
| popPK | Boyman_2011 | irrelevant | 0 | 0 | The study uses ammonium chloride as a diagnostic tool to manipulate intracellular pH in a mechanistic study of the Na+/Ca2+ exchanger, not to characterize the pharmacokinetics of ammonium chloride. |
| PD | Boyman_2011 | not_relevant | 0 | 0 | The paper reports a concentration-response relationship for intracellular calcium ([Ca2+]i) on NCX current, not for ammonium chloride; ammonium chloride is used only as a tool to manipulate intracellular pH. |
| popPK | Brosnan_2007 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | Brosnan_2007 | not_relevant | 0 | 0 | The provided text is a single sentence stating a qualitative property of ammonia and contains no data, analysis, or numeric parameters for ammonium chloride. |
| popPK | Brun_2022 | irrelevant | 0 | 0 | The paper studies the pharmacology of GNS561, and ammonium chloride is used only as a tool compound to modulate lysosomal pH, not as the subject of pharmacokinetic analysis. |
| PD | Brun_2022 | not_relevant | 0 | 0 | The paper focuses on the drug GNS561; ammonium chloride is only used as a lysosomotropic control agent in mechanistic experiments, and no exposure-response or dose-response PD model with numeric parameters is reported for it. |
| popPK | Bužková_2025 | irrelevant | 0 | 0 | The paper investigates the synthesis and antibacterial activity of selenium nanoparticles, not the pharmacokinetics of ammonium chloride. |
| PD | Bužková_2025 | not_relevant | 0 | 0 | The paper investigates selenium nanoparticles, not ammonium chloride, and reports no pharmacodynamic relationship for the target drug. |
| popPK | Campos_1984 | irrelevant | 0 | 0 | The study investigates the effect of ammonium chloride on gap junction conductance in crayfish axons, which is a mechanistic electrophysiology study, not a pharmacokinetic study. |
| PD | Campos_1984 | not_relevant | 0 | 0 | The paper investigates the pH dependence of gap junction conductance in crayfish axons, not the pharmacodynamic exposure-response relationship of ammonium chloride as a drug in a clinical or physiological context. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a computational drug design study and does not report any pharmacokinetic parameters for ammonium chloride. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper focuses on computational drug design and does not report any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not contain any pharmacokinetic data for ammonium chloride. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not contain any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Cuthbert_1978 | irrelevant | 0 | 0 | The study investigates insulin resistance and metabolic effects of acidosis in rats, using ammonium chloride only as an acidifying agent, and reports no pharmacokinetic parameters for ammonium chloride. |
| popPK | Dave_2012 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Dave_2012 | not_relevant | 0 | 0 | The paper focuses on the biodegradation of pharmaceuticals and surfactants by activated sludge and does not report any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper focuses on the development of dual GPBAR1 and LIFR modulators for liver fibrosis and does not involve ammonium chloride or its pharmacokinetics. |
| PD | De_2025 | not_relevant | 0 | 0 | The paper studies a novel estradienone derivative (compound 2o) for liver fibrosis and does not mention or analyze ammonium chloride. |
| popPK | Di_2017 | irrelevant | 0 | 0 | The paper studies the ecotoxicity of quaternary ammonium compounds to bacteria, not the pharmacokinetics of ammonium chloride. |
| popPK | Ding_2015 | irrelevant | 0 | 0 | The paper reports acute toxicity (IC50) values for ammonium chloride in an environmental microbiology context, not pharmacokinetic disposition parameters. |
| popPK | Ding_2025 | irrelevant | 0 | 0 | The study focuses on docetaxel pharmacokinetics using a chitosan derivative (HACC) as a carrier, not ammonium chloride as the subject drug. |
| PD | Ding_2025 | not_relevant | 0 | 0 | The paper focuses on docetaxel delivery via nanoparticles and does not report any pharmacodynamic or exposure-response relationship for ammonium chloride. |
| popPK | Dong_2022 | irrelevant | 0 | 0 | The paper focuses on the synthesis and herbicidal activity of secondary ammonium salts, not the pharmacokinetics of ammonium chloride. |
| popPK | Doyle_1990 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment of ammonium chloride on cell growth, not a pharmacokinetic study reporting disposition parameters. |
| popPK | El-Shanshoury_2025 | irrelevant | 0 | 0 | The paper characterizes L-asparaginase enzyme production and activity, not the pharmacokinetics of ammonium chloride. |
| PD | El-Shanshoury_2025 | not_relevant | 0 | 0 | The paper characterizes the enzyme L-asparaginase (kinetics, stability, cytotoxicity) and does not report any pharmacodynamic or exposure-response relationship for ammonium chloride. |
| popPK | Ferrell_2024 | irrelevant | 0 | 0 | The paper investigates niacin metabolites and cardiovascular disease risk, not the pharmacokinetics of ammonium chloride. |
| PD | Ferrell_2024 | not_relevant | 0 | 0 | The paper investigates niacin metabolites (2PY/4PY) and cardiovascular risk, not ammonium chloride, and does not report a pharmacodynamic exposure-response model. |
| popPK | Foster_1992 | irrelevant | 0 | 0 | The study uses ammonium chloride as a diagnostic tool to measure Na+-H+ exchange in rat mesenteric arteries, not as a subject drug for pharmacokinetic analysis. |
| popPK | Fulton_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on immunotoxin cytotoxicity where ammonium chloride is used as a lysosomotropic amine adjunct, not as the subject of a pharmacokinetic analysis. |
| popPK | Futane_2023 | irrelevant | 0 | 0 | The paper is a review on aptamer-based biosensors for point-of-care diagnosis and contains no pharmacokinetic data for ammonium chloride. |
| PD | Futane_2023 | not_relevant | 0 | 0 | The paper is a review on aptamer-based biosensors for point-of-care diagnosis and contains no pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Garnett_1985 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of a methotrexate-antibody conjugate in vitro, using ammonium chloride only as a mechanistic inhibitor, and reports no pharmacokinetic parameters for ammonium chloride. |
| PD | Garnett_1985 | not_relevant | 1 | 0 | The paper mentions ammonium chloride only as a qualitative inhibitor affecting cytotoxicity, without providing any numeric dose-response or concentration-effect data for it. |
| popPK | Ge_2010 | irrelevant | 0 | 0 | The study investigates the toxicological effects of cetyltrimethyl ammonium chloride (CTAC) on algae, not the pharmacokinetics of ammonium chloride. |
| popPK | Gillespie_1976 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of tetraethylammonium chloride (TEA) on rat muscle, not the pharmacokinetics of ammonium chloride. |
| PD | Gillespie_1976 | not_relevant | 4 | 3 | The paper describes qualitative dose-response trends and competitive antagonism (parallel shift) for tetraethylammonium chloride, but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect curves in the text. |
| popPK | Gorle_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel anticancer derivatives where ammonium chloride is used only as a reagent, not as a subject drug for pharmacokinetic analysis. |
| PD | Gorle_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for novel benzochromene derivatives, not for ammonium chloride, which is used only as a reagent in the synthesis. |
| PGx | Griffin_2019 | not_relevant | 0 | 0 | The paper models ammonia metabolism and the effect of CPS1 gene variants on endogenous ammonia levels, not the pharmacokinetics or pharmacodynamics of the drug ammonium chloride. |
| popPK | Gupta_2019 | irrelevant | 0 | 0 | The paper focuses on doxorubicin and curcumin delivery via nanoparticles, and ammonium chloride is only mentioned as a catalyst (PPNCl), not as a subject drug for PK analysis. |
| PD | Gupta_2019 | not_relevant | 0 | 0 | The paper focuses on the synthesis and characterization of nanoparticles for drug delivery (doxorubicin/curcumin) and reports IC50 values for cytotoxicity, but does not report a pharmacodynamic or exposure-response relationship for ammonium chloride. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a microbiological study on TNT and RDX degradation, and ammonium chloride is only mentioned as a nutrient source, not as a subject drug for pharmacokinetic analysis. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper reports dose-response data for TNT inhibition of bacterial RDX degradation, not a pharmacodynamic relationship for ammonium chloride. |
| popPK | Hawtin_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and pharmacodynamics of MHV370 (a TLR7/8 antagonist), not ammonium chloride. |
| popPK | Hernández_2017 | irrelevant | 0 | 0 | The paper describes a flow cytometry platform for drug screening in hematological malignancies and does not report pharmacokinetic parameters for ammonium chloride. |
| PD | Hernández_2017 | not_relevant | 0 | 0 | The paper describes a platform for testing various anticancer drugs (e.g., cytarabine, idelalisib) but does not report any data, analysis, or PD parameters for ammonium chloride. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a dental materials study on a polymer fluoride (PDDAF) and does not report pharmacokinetic parameters for ammonium chloride. |
| PGx | Inoue_1994 | not_relevant | 0 | 0 | The paper studies the metabolic stability of T4 lysozyme variants and does not report pharmacogenomic effects on the PK/PD of ammonium chloride. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper studies SHIP1 ligands for Alzheimer's disease and does not involve ammonium chloride or its pharmacokinetics. |
| PD | Jesudason_2026 | not_relevant | 1 | 0 | The paper describes a SHIP1 ligand (not ammonium chloride) and reports qualitative pharmacodynamic effects (gene expression, IL-1β levels) without providing numeric concentration-response parameters or a formal PD model. |
| popPK | Johansen_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of doxorubicin, using ammonium chloride only as a co-administered agent to induce acid urine, not as the subject drug. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The paper is a clinical chemistry atlas for toxicity in rats and does not report pharmacokinetic parameters for ammonium chloride. |
| PD | Kadyrov_2025 | not_relevant | 0 | 0 | The paper is a clinical chemistry atlas for 86 toxins in rats and does not report specific pharmacodynamic or exposure-response parameters for ammonium chloride. |
| popPK | Kamberi_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ciprofloxacin, using ammonium chloride only as a co-administered agent to modify urinary pH, not as the subject drug. |
| popPK | Kameneva_2022 | irrelevant | 0 | 0 | The paper studies serotonin's role in adrenal development and contains no pharmacokinetic data for ammonium chloride. |
| PD | Kameneva_2022 | not_relevant | 0 | 0 | The paper investigates the developmental role of serotonin in adrenal chromaffin cell generation and does not report any pharmacodynamic or exposure-response relationship for ammonium chloride. |
| popPK | Kaur_2016 | irrelevant | 0 | 0 | The paper studies a palladium-based colloidal carrier, not the pharmacokinetics of ammonium chloride. |
| popPK | Kekez_2015 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Kekez_2015 | not_relevant | 0 | 0 | The paper describes microbial fermentation and metabolic engineering, not pharmacodynamics or drug exposure-response relationships. |
| PGx | Khuu_2011 | not_relevant | 0 | 0 | The paper investigates the metabolic capabilities of differentiated liver progenitor cells, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of ammonium chloride. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper studies benzalkonium chloride (a different drug/chemical) in an environmental/ecotoxicology context, not the pharmacokinetics of ammonium chloride. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper investigates benzalkonium chloride (BKC), not ammonium chloride, and focuses on environmental ecotoxicology rather than pharmacodynamics. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper is a proteomics study on tau protein in neurodegenerative diseases and does not involve the drug ammonium chloride or its pharmacokinetics. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper is a proteomics study characterizing tau protein modifications in brain tissue and does not involve ammonium chloride or any pharmacodynamic modeling. |
| PGx | Laemmle_2022 | not_relevant | 0 | 0 | The paper models a genetic liver disease (OTCD) and uses ammonium chloride as a substrate/challenge agent to measure urea production, not as a drug to assess pharmacokinetic or pharmacodynamic parameters. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The paper investigates the physicochemical properties and antimicrobial activity of gemini surfactants, not the pharmacokinetics of ammonium chloride. |
| PGx | Liu_2011 | not_relevant | 0 | 0 | The study investigates the effect of ammonium chloride on the pharmacokinetics of cephalexin, not the pharmacokinetics or pharmacodynamics of ammonium chloride itself. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is about microbial electrochemical biosensors for marine pollution monitoring and does not involve pharmacokinetic studies of ammonium chloride. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The paper describes electrochemical biosensors for detecting heavy metals and pesticides, not the pharmacodynamics of ammonium chloride. |
| popPK | Lorenzutti_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of marbofloxacin in goats, not ammonium chloride. |
| popPK | Maddaiah_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial metabolism and does not report pharmacokinetic parameters for ammonium chloride. |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | The paper studies the morphology of Candida albicans using ammonium chloride as a nitrogen source, not the pharmacokinetics or pharmacodynamics of ammonium chloride as a drug in humans. |
| popPK | Martynov_2025 | irrelevant | 0 | 0 | The study focuses on dipyridamole derivatives and does not involve ammonium chloride or its pharmacokinetics. |
| PD | Martynov_2025 | not_relevant | 2 | 1 | The paper reports in vitro PDE inhibition activity (mentioning a threshold concentration of 0.05 μM) and in vivo efficacy, but it does not provide a dose-response curve, Emax/EC50 parameters, or any PK/PD modeling for ammonium chloride (or the dipyridamole derivatives). |
| popPK | Mavangira_2010 | irrelevant | 0 | 0 | The study focuses on urine pH and electrolyte excretion (physiological effects) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | McKinney_1993 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | McKinney_1993 | not_relevant | 0 | 0 | The paper characterizes muscarinic autoreceptors in rat hippocampus and does not report any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Medrano_2024 | irrelevant | 0 | 0 | The paper describes antiviral inhibitors of SARS-CoV-2 main protease and does not involve ammonium chloride or its pharmacokinetics. |
| PD | Medrano_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (Ki) and antiviral activity (EC50) for novel SARS-CoV-2 Mpro inhibitors, not pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Nash_2022 | irrelevant | 0 | 0 | The paper focuses on cytokine delivery platforms and tumor models, with no mention of ammonium chloride or its pharmacokinetics. |
| PD | Nash_2022 | not_relevant | 0 | 0 | The paper focuses on IL-2 delivery and does not report any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anticancer evaluation of thiazole-derived EGFR/CDK-2 inhibitors and does not involve ammonium chloride or any pharmacokinetic studies. |
| PD | Nasr_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for kinase inhibition (EGFR/CDK-2) of thiazole analogues, not for ammonium chloride, and does not describe a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Nesbitt_2025 | irrelevant | 0 | 0 | The paper studies BLVRB inhibitors (BCT1028, etc.) in mice, not ammonium chloride. |
| popPK | Ni_2024 | irrelevant | 0 | 0 | The paper describes a computational method for drug target identification using transcriptomics and does not contain any pharmacokinetic data for ammonium chloride. |
| PD | Ni_2024 | not_relevant | 0 | 0 | The paper focuses on a machine learning method (PertKGE) for target identification and reports PD data for K-756 and ALDH1B1 inhibitors, but contains no data or analysis for ammonium chloride. |
| popPK | Nilsson_1982 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methadone, using ammonium chloride only as a co-administered agent to induce acidic urine, and does not report PK parameters for ammonium chloride itself. |
| PD | Nilsson_1982 | not_relevant | 0 | 0 | The text describes the effect of ammonium chloride on methadone pharmacokinetics (half-life), not a pharmacodynamic or exposure-response relationship for ammonium chloride itself. |
| PGx | Okpala_2025 | not_relevant | 0 | 0 | The paper studies biocide efficacy on sulfate-reducing biofilms and does not involve ammonium chloride or pharmacogenomics. |
| popPK | Olesinski_2024 | irrelevant | 0 | 0 | The paper focuses on mechanisms of multidrug resistance in AML and does not report pharmacokinetic parameters for ammonium chloride. |
| PD | Olesinski_2024 | not_relevant | 0 | 0 | The paper focuses on the mechanism of multidrug resistance in AML using BH3 profiling and does not report any pharmacodynamic or exposure-response analysis for ammonium chloride. |
| PGx | Ozdemir_2004 | not_relevant | 0 | 0 | The paper investigates the effect of urine pH (induced by ammonium chloride) on CYP2D6 probe drug ratios, not the pharmacokinetics or pharmacodynamics of ammonium chloride itself. |
| PGx | Pan_2025 | not_relevant | 0 | 0 | The paper investigates bacterial manipulation of host inflammatory pathways and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ammonium chloride. |
| popPK | Quiroga_2021 | irrelevant | 0 | 0 | The study focuses on the biodegradability and toxicity of dodecyl trimethyl ammonium chloride (DTMAC), a surfactant, not the pharmacokinetics of the drug ammonium chloride. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | The paper focuses on transporter pharmacology and hit identification for ABC/SLC transporters, with no mention of ammonium chloride or its pharmacokinetic parameters. |
| PD | Rafehi_2026 | not_relevant | 0 | 0 | The paper does not mention ammonium chloride; it focuses on repurposing polypharmacological drugs for membrane transporters. |
| popPK | Renuka_2016 | irrelevant | 0 | 0 | The study investigates the protective effects of chrysin in an ammonium chloride-induced hyperammonemia model, focusing on biochemical and histological outcomes rather than the pharmacokinetic parameters of ammonium chloride. |
| PD | Renuka_2016 | not_relevant | 3 | 2 | The study reports qualitative dose-dependent effects of chrysin on biochemical markers in an ammonium chloride-induced model, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response curve for ammonium chloride itself. |
| popPK | Rodriguez_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular pH regulation in MDCK cells where ammonium chloride is used only as a tool for acidification pulses, not as the subject drug for PK parameter estimation. |
| PD | Rodriguez_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for prostaglandin E2, not ammonium chloride; ammonium chloride is used only as a tool to induce acidification. |
| popPK | Rudalska_2025 | irrelevant | 0 | 0 | The paper studies p38α inhibitors (e.g., compound 2015) in colorectal cancer models, not the pharmacokinetics of ammonium chloride. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The paper is an electrochemical study of danofloxacin, not a pharmacokinetic study of ammonium chloride. |
| PD | Rudnicki_2024 | not_relevant | 0 | 0 | The paper is an analytical chemistry study on the electrochemical detection of danofloxacin, not a pharmacodynamic study of ammonium chloride. |
| popPK | Rybak_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on ribonuclease cytotoxicity where ammonium chloride is used only as a modulator of receptor cycling, not as the subject drug for pharmacokinetic analysis. |
| PD | Rybak_1991 | not_relevant | 1 | 0 | The paper reports IC50 values for ribonuclease conjugates, not for ammonium chloride, which is only mentioned qualitatively as a compound that decreases cytotoxicity. |
| popPK | Shahid_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anti-cancer efficacy of magnesium oxide nanoparticles and cationic polymers, with no pharmacokinetic data or mention of ammonium chloride as a subject drug. |
| PD | Shahid_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for magnesium oxide nanoparticles and polymers, not for ammonium chloride. |
| popPK | Smith_2008 | irrelevant | 0 | 0 | The paper is a mechanistic study of an antibody-drug conjugate where ammonium chloride is used only as a lysosomotropic inhibitor, not as the subject drug for pharmacokinetic analysis. |
| PD | Smith_2008 | not_relevant | 0 | 0 | The paper reports IC50 values for the antibody-drug conjugate AC133-vcMMAF, but ammonium chloride is used only as a qualitative inhibitor to block lysosomal trafficking, with no dose-response curve or numeric PD parameters reported for it. |
| popPK | Suissa_2026 | irrelevant | 0 | 0 | The paper is a metabolomics study on cancer immunotherapy outcomes and does not report pharmacokinetic parameters for ammonium chloride. |
| PD | Suissa_2026 | not_relevant | 0 | 0 | The paper focuses on metabolomics (histidine) and immunotherapy outcomes; it does not report any pharmacodynamic or exposure-response relationship for ammonium chloride. |
| popPK | Swaminathan_2021 | irrelevant | 0 | 0 | The paper studies vaccine hyporesponse and gut microbiome in mice and non-human primates, with no mention of ammonium chloride or its pharmacokinetics. |
| PD | Swaminathan_2021 | not_relevant | 0 | 0 | The paper investigates the effect of vancomycin on vaccine response and microbiome composition, not the pharmacodynamics of ammonium chloride. |
| PGx | Taneyama_1989 | not_relevant | 0 | 0 | The paper investigates the hemodynamic effects of dibutyryl cAMP and dopamine in dogs with induced acidosis, containing no data on gene variants or pharmacogenomics. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Tao_2024 | not_relevant | 0 | 0 | The paper focuses on the toxicity of quaternary ammonium mixtures and data mining, not on the pharmacodynamics or exposure-response of ammonium chloride. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report specific pharmacokinetic parameters for ammonium chloride. |
| PD | Taskar_2020 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report any pharmacodynamic or exposure-response analysis for ammonium chloride. |
| popPK | Tayebi_2026 | irrelevant | 0 | 0 | The study investigates the lipid-lowering effects of basil-enriched soybean oil in mice and does not involve ammonium chloride or any pharmacokinetic parameters. |
| PD | Tayebi_2026 | not_relevant | 0 | 0 | The paper investigates the effects of basil-enriched soybean oil, not ammonium chloride, and does not report any pharmacodynamic or exposure-response parameters for the target drug. |
| popPK | Umemoto_1989 | irrelevant | 0 | 0 | The paper studies the cytotoxicity of methotrexate-antibody conjugates, using ammonium chloride only as a mechanistic probe (lysosomotropic amine) rather than as the subject drug for pharmacokinetic analysis. |
| PD | Umemoto_1989 | not_relevant | 1 | 0 | The paper reports IC50 values for methotrexate antibody conjugates, not for ammonium chloride; ammonium chloride is only mentioned qualitatively as an inhibitor that decreased cytotoxicity. |
| popPK | Walton_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on PRMT1 inhibition in renal cell carcinoma and does not involve ammonium chloride or any pharmacokinetic analysis. |
| PGx | Wang_2011 | not_relevant | 0 | 0 | The paper studies plant physiology and ammonium toxicity in macrophytes, not human pharmacogenomics or PK/PD parameters. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper is a review of acyclovir synthesis and detection, not a pharmacokinetic study of ammonium chloride. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis, toxicology, and detection methods, and does not contain any pharmacodynamic or exposure-response data for ammonium chloride. |
| popPK | Westhoff_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ammonium transport in Xenopus oocytes, not a pharmacokinetic study of ammonium chloride disposition. |
| popPK | Widerlöv_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remoxipride, using ammonium chloride only as a urinary acidifying agent to modify remoxipride's elimination. |
| popPK | Wohnlich_1975 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Wohnlich_1975 | not_relevant | 0 | 0 | The paper focuses on the purification and biochemical properties of a fructose 6-phosphate kinase inhibitor, not on the pharmacodynamics or exposure-response of ammonium chloride. |
| popPK | Xia_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ophiopogonin D, not ammonium chloride, which is only used as a mobile phase component. |
| popPK | Xie_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cefadroxil, not ammonium chloride. |
| PD | Xie_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for cefadroxil, not ammonium chloride, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Xu_2009 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Xu_2009 | not_relevant | 0 | 0 | The paper studies cetyltrimethyl ammonium chloride (CTAC), not ammonium chloride, and focuses on algal growth inhibition mechanisms rather than pharmacodynamic modeling of ammonium chloride. |
| popPK | Yang_2000 | irrelevant | 0 | 0 | The study is an in-vitro cell culture experiment investigating the effects of ammonium chloride on cell growth and protein glycosylation, not a pharmacokinetic study. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Rhodojaponin III (RJ-III), not ammonium chloride. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper studies Rhodojaponin III (RJ-III) and its nanoparticle formulation; ammonium chloride is not the subject of any pharmacodynamic or exposure-response analysis. |
| popPK | Yoshino_1984 | irrelevant | 0 | 0 | The study is a cell culture experiment investigating Schwann cell proliferation, and ammonium chloride is used only as a lysosomal inhibitor, not as a subject drug for pharmacokinetic analysis. |
| PD | Yoshino_1984 | not_relevant | 0 | 0 | The paper reports dose-response relationships for axolemma and myelin fractions, not for ammonium chloride, which is only mentioned as a qualitative inhibitor of myelin activity. |
| popPK | Yu_2022 | irrelevant | 0 | 0 | The paper is a virology study on Coxsackievirus A16 where ammonium chloride is used only as an antiviral inhibitor in cell culture, not as a subject drug for pharmacokinetic analysis. |
| popPK | Zahiruddin_2021 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory activity of a polyherbal combination in mice and does not involve ammonium chloride or pharmacokinetic modeling. |
| PD | Zahiruddin_2021 | not_relevant | 0 | 0 | The paper studies a polyherbal combination, not ammonium chloride, and reports no pharmacodynamic parameters for the target drug. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper studies the inhibitory effects of dodecyl dimethyl benzyl ammonium chloride (DDBAC) on anaerobic digestion, which is a different chemical compound and not a pharmacokinetic study of ammonium chloride. |
| PD | Zhao_2022 | not_relevant | 0 | 0 | The paper studies the inhibitory effect of dodecyl dimethyl benzyl ammonium chloride (DDBAC) on anaerobic digestion, not the pharmacodynamics of ammonium chloride. |
| popPK | Zimmermann-Kogadeeva_2022 | irrelevant | 0 | 0 | The paper is a metabolomics study in mice focusing on gut microbiota and diet, with no pharmacokinetic data for ammonium chloride. |
| PD | Zimmermann-Kogadeeva_2022 | not_relevant | 0 | 0 | The paper focuses on multiomics and metabolic flux modeling in mice to disentangle diet, host, and microbiota contributions to metabolite levels; it does not report a pharmacodynamic or exposure-response relationship for ammonium chloride. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
