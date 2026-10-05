<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;phenformin&quot;}]"></div>

# phenformin

- **generic name:** phenformin
- **ATC codes:** `A10BA01`, `A10BD01`
- **DrugBank:** [DB00914](https://go.drugbank.com/drugs/DB00914) · **PubChem:** [CID 8249](https://pubchem.ncbi.nlm.nih.gov/compound/8249)
- **molar mass:** 205.2596 g/mol (C10H15N5) — DrugBank
- **groups:** approved, withdrawn

## About

Phenformin is a biguanide anti-diabetic medication that was used to lower blood sugar in people with diabetes. It has been withdrawn from the market because it caused serious lactic acidosis, and it is no longer used in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q753100](https://www.wikidata.org/wiki/Q753100) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 02:45 | 6:05 | 0/0/0 | 2/1/0 | 0/0/0 | 197,485/6,480 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/9 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Barbieri_2018_CLIC1_current](drugs/drug_phenformin/pd_Barbieri_2018_CLIC1_current.md) | CLIC1 current ← phenformin · inhibition effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span> | [Liu_2015_cell_viability](drugs/drug_phenformin/pd_Liu_2015_cell_viability.md) | cell viability ← phenformin · direct Emax (saturable) effect | — | Liu Z et al., Phenformin Induces Cell Cycle Change, A…, PloS one (2015) | [10.1371/journal.pone.0131207](https://doi.org/10.1371/journal.pone.0131207) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Barbieri_2018_GSC_viability](drugs/drug_phenformin/pd_Barbieri_2018_GSC_viability.md) | GSC viability ← phenformin · direct sigmoid Emax (Hill) effect | — | Barbieri F et al., Inhibition of Chloride Intracellular Ch…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00899](https://doi.org/10.3389/fphar.2018.00899) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2003_lactate](drugs/drug_phenformin/pd_Wang_2003_lactate.md) | blood lactate concentration ← phenformin · direct Emax (saturable) effect | — | Wang DS et al., Involvement of organic cation transport…, Molecular pharmacology (2003) | [10.1124/mol.63.4.844](https://doi.org/10.1124/mol.63.4.844) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenformin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: KCNJ8 (inhibitor), PRKAA1 (activator), PRKAB1 (activator), PRKAG1 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 94 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alkalay_1975.pdf` | Alkalay D et al., Pharmacokinetics of phenformin in man, Journal of clinical pharmac… (1975) | popPK | 8 | [10.1002/j.1552-4604.1975.tb02367.x](https://doi.org/10.1002/j.1552-4604.1975.tb02367.x) | [1133221](https://pubmed.ncbi.nlm.nih.gov/1133221) | The study reports a half-life of 11 hours and plasma protein binding (19%) for phenformin in humans, but lacks explicit clearance or volume of distribution values. |
| `Althoff_1978.pdf` | Althoff PH et al., [Haemodialysis in the treatment of bigu…, Deutsche medizinische Woche… (1978) | popPK | 8 | [10.1055/s-0028-1104382](https://doi.org/10.1055/s-0028-1104382) | [627171](https://pubmed.ncbi.nlm.nih.gov/627171) | The abstract reports quantitative in vivo clearance values for phenformin (68 +/- 33 ml/min) in the context of haemodialysis. |
| `Bosisio_1981.pdf` | Bosisio E et al., Defective hydroxylation of phenformin a…, Diabetes (1981) | popPK | 8 | [10.2337/diab.30.8.644](https://doi.org/10.2337/diab.30.8.644) | [7250534](https://pubmed.ncbi.nlm.nih.gov/7250534) | The study reports phenformin pharmacokinetics in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided abstract text. |
| `Choi_2016.pdf` | Choi MK et al., Blockade of P-Glycoprotein Decreased th…, Biomolecules & therapeutics (2016) | popPK | 8 | [10.4062/biomolther.2015.087](https://doi.org/10.4062/biomolther.2015.087) | [26797108](https://pubmed.ncbi.nlm.nih.gov/26797108) | The study reports phenformin PK parameters (CL/F, Vss/F) in rats, but specific numeric values are not provided in the text, only qualitative changes. |
| `Kshirsagar_1988.pdf` | Kshirsagar NA et al., Effect of iron deficiency anaemia and i…, Xenobiotica; the fate of fo… (1988) | popPK | 8 | [10.3109/00498258809042241](https://doi.org/10.3109/00498258809042241) | [3242313](https://pubmed.ncbi.nlm.nih.gov/3242313) | The study reports on phenformin pharmacokinetics (absorption and half-life) in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only qualitative statements of "no significant difference." |
| `Li_2026.pdf` | Li XD et al., In vivo pharmacokinetics and lactic aci…, Life sciences (2026) | popPK | 8 | [10.1016/j.lfs.2026.124673](https://doi.org/10.1016/j.lfs.2026.124673) | [42710778](https://pubmed.ncbi.nlm.nih.gov/42710778) | The study reports in vivo pharmacokinetics of phenformin in rats, but the specific numeric parameter values (Cmax, AUC, etc.) are not present in the provided evidence text. |
| `Conlay_1977.pdf` | Conlay LA et al., Serum phenformin concentrations in pati…, Diabetes (1977) | popPK | 6 | [10.2337/diab.26.7.628](https://doi.org/10.2337/diab.26.7.628) | [406157](https://pubmed.ncbi.nlm.nih.gov/406157) | The study reports apparent half-lives for phenformin in humans, which is a quantitative disposition parameter, though it lacks clearance or volume data. |
| `Barkhuizen_2014.pdf` | Barkhuizen M et al., The inhibition of monoamine oxidase by…, Drug research (2014) | pd | 4 | [10.1055/s-0033-1361129](https://doi.org/10.1055/s-0033-1361129) | [24307270](https://www.ncbi.nlm.nih.gov/pubmed/24307270) | metadata signals extractable PD data (IC50) |
| `Kühnle_1990.pdf` | Kühnle HF et al., Blood-glucose-lowering activity of 2-(3…, Biochemical pharmacology (1990) | pd | 4 | [10.1016/0006-2952(90)90362-o](https://doi.org/10.1016/0006-2952(90)90362-o) | [2242016](https://www.ncbi.nlm.nih.gov/pubmed/2242016) | metadata signals extractable PD data (EC50) |
| `Markowicz-Piasecka_2017.pdf` | Markowicz-Piasecka M et al., Metformin and Its Sulfenamide Prodrugs…, Oxidative medicine and cell… (2017) | pd | 4 | [10.1155/2017/7303096](https://doi.org/10.1155/2017/7303096) | [28770024](https://www.ncbi.nlm.nih.gov/pubmed/28770024) | metadata signals extractable PD data (IC50) |
| `Zhigulin_2024.pdf` | Zhigulin AS et al., Mechanisms of NMDA Receptor Inhibition…, Pharmaceuticals (Basel, Swi… (2024) | pd | 4 | [10.3390/ph17091234](https://doi.org/10.3390/ph17091234) | [39338396](https://www.ncbi.nlm.nih.gov/pubmed/39338396) | metadata signals extractable PD data (IC50) |
| `Zhigulin_2026.pdf` | Zhigulin AS et al., Mechanisms of NMDA receptor inhibition…, Biochemical and biophysical… (2026) | pd | 4 | [10.1016/j.bbrc.2025.153158](https://doi.org/10.1016/j.bbrc.2025.153158) | [41418346](https://www.ncbi.nlm.nih.gov/pubmed/41418346) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T02:41:53.329587+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_2010 | irrelevant | 0 | 0 | Phenformin is used only as an internal standard for the quantification of metformin and gliclazide, not as the subject drug for PK parameter estimation. |
| popPK | Angrisani_1993 | irrelevant | 0 | 0 | The study investigates drug interactions where phenformin is a co-administered agent, and no quantitative pharmacokinetic parameters for phenformin are reported. |
| PD | Angrisani_1993 | not_relevant | 0 | 0 | The paper reports a lack of significant interaction (p &gt; 0.05) between teicoplanin and phenformin but provides no numeric PD parameters, concentration-effect curves, or dose-response data for phenformin. |
| PD | Bailey_1988 | not_relevant | 0 | 0 | The text is a qualitative review of metformin's mechanism of action and safety profile, mentioning phenformin only in the context of lactic acidosis risk, with no numeric PD parameters or exposure-response data provided. |
| popPK | Baran_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and metabolic effects of IACS-010759 and phenformin in T-ALL models, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for phenformin. |
| PGx | Berstein_2013 | not_relevant | 0 | 0 | The paper investigates metformin pharmacogenomics and only mentions phenformin in the conclusion as a subject for future investigation, providing no data on phenformin PK/PD. |
| PGx | Boobis_1983 | not_relevant | 2 | 5 | The paper reports in vitro enzyme inhibition kinetics (Ki values) for phenformin against debrisoquine 4-hydroxylase, but does not report in vivo pharmacokinetic or pharmacodynamic parameter changes in humans based on genotype. |
| popPK | Bosisio_1981 | relevant | 8 | 2 | The study reports phenformin pharmacokinetics in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided abstract text. |
| popPK | Chapman_2023 | irrelevant | 2 | 0 | The study mentions measuring phenformin pharmacokinetics to confirm bioavailability but provides no quantitative disposition parameters (CL, V, ka, etc.) in the evidence. |
| popPK | Choi_2016 | relevant | 8 | 2 | The study reports phenformin PK parameters (CL/F, Vss/F) in rats, but specific numeric values are not provided in the text, only qualitative changes. |
| popPK | Dafre_2020 | irrelevant | 0 | 0 | The study is a mechanistic cell biology paper investigating TXNIP regulation, and phenformin is used only as a tool compound (AMPK activator) rather than being the subject of pharmacokinetic analysis. |
| popPK | Deng_2012 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for puerarin, with phenformin acting only as a co-administered agent to test for interactions, and no PK data for phenformin itself are provided. |
| PGx | Eichelbaum_1984 | not_relevant | 5 | 0 | The paper mentions phenformin as a substrate for polymorphic oxidation but provides no specific data, tables, or quantitative PK/PD parameters for phenformin. |
| popPK | Ferner_1987 | irrelevant | 0 | 0 | The paper is a review discussing general pharmacokinetic principles of oral hypoglycaemic agents and does not report specific quantitative disposition parameters for phenformin. |
| PD | Ferner_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK/PD concepts and adverse effects (lactic acidosis) without providing any numeric PD parameters or concentration-effect data for phenformin. |
| PGx | Ferner_1987 | not_relevant | 2 | 0 | The text mentions pharmacogenetic variation in phenformin metabolism as a cause for lactic acidosis but does not report specific gene variants or quantitative PK/PD parameter changes. |
| PGx | Fletcher_1986 | not_relevant | 2 | 5 | The study reports no significant differences in lactate, pyruvate, or glucose parameters between phenformin metabolizer phenotypes, indicating a lack of observed pharmacogenomic effect. |
| popPK | Futatsugi_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter variants in HEK293 cells and does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for phenformin. |
| PGx | Hawley_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of AMPK activation by phenformin in cell lines with gamma subunit variants, but does not report pharmacokinetic or pharmacodynamic parameters in a clinical or pharmacogenomic context. |
| popPK | Hermann_1979 | irrelevant | 0 | 0 | The paper is a review of metformin, and phenformin is only mentioned as a withdrawn comparator regarding lactic acidosis risk, with no PK parameters reported. |
| popPK | Hibma_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not phenformin. |
| PD | Hibma_2016 | not_relevant | 0 | 0 | The paper studies metformin, not phenformin, and reports only qualitative PK changes and a transient glucose effect without numeric PD parameters. |
| popPK | Holstein_2006 | irrelevant | 0 | 0 | The paper is a review discussing metformin contraindications and only mentions phenformin as a historical comparator without providing any quantitative pharmacokinetic parameters. |
| popPK | Hulea_2018 | irrelevant | 0 | 0 | The paper focuses on the metabolic mechanisms of cancer cells treated with biguanides and kinase inhibitors, not on the pharmacokinetic parameters of phenformin. |
| PD | Hulea_2018 | not_relevant | 0 | 0 | The paper focuses on mechanistic metabolic reprogramming and synergy in cancer cells, without reporting specific pharmacokinetic or pharmacodynamic exposure-response models or numeric PD parameters for phenformin. |
| popPK | Incerpi_1979 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme activity on liver membranes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Incerpi_1979 | not_relevant | 1 | 0 | The paper describes qualitative inhibition of (Na+-K+)-ATPase and changes in Hill coefficients but does not provide numeric concentration-effect data, IC50/EC50 values, or a derivable PD curve for phenformin. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a molecular docking template for CYP2D6 substrates and does not report pharmacogenomic effects on phenformin PK/PD parameters. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses lactic acidosis in childhood and mentions phenformin only as an exogenous cause, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Iversen_2017 | irrelevant | 0 | 0 | The study focuses on metformin pharmacokinetics (11C-METF PET) and in vitro effects of phenformin, without reporting quantitative PK parameters (CL, V, etc.) for phenformin. |
| popPK | Jeong_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin, not phenformin. |
| PD | Jeong_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) and allometric scaling of metformin across nine species, with no analysis of pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Kandeel_2021 | irrelevant | 0 | 0 | The paper is a computational docking study of phenformin against SARS-CoV-2 protease and does not report any pharmacokinetic parameters. |
| popPK | Kshirsagar_1988 | relevant | 8 | 2 | The study reports on phenformin pharmacokinetics (absorption and half-life) in humans, but the specific numeric values for clearance, volume, or half-life are not present in the provided evidence, only qualitative statements of "no significant difference." |
| popPK | Kühnle_1990 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Kühnle_1990 | not_relevant | 0 | 0 | The paper investigates a different compound (BM 13.677), not phenformin. |
| popPK | Lalau_2010 | irrelevant | 0 | 0 | The paper is a review of metformin-induced lactic acidosis and does not report quantitative pharmacokinetic parameters for phenformin. |
| popPK | Li_2026 | relevant | 8 | 2 | The study reports in vivo pharmacokinetics of phenformin in rats, but the specific numeric parameter values (Cmax, AUC, etc.) are not present in the provided evidence text. |
| PD | Lu_2020 | not_relevant | 1 | 0 | The paper focuses on a novel gene delivery polymer (CBA-Bu) and only qualitatively mentions biguanides like phenformin as background; it does not report any PD or exposure-response data for phenformin itself. |
| popPK | Malczewski_1978 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Marchetti_1987 | irrelevant | 2 | 0 | The study reports steady-state plasma concentrations and correlations with metabolic parameters, but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Marchetti_1991 | irrelevant | 1 | 0 | The paper is a review discussing general pharmacokinetic properties of oral hypoglycemic agents without reporting specific quantitative disposition parameters (CL, V, etc.) for phenformin. |
| PD | Markowicz-Piasecka_2017 | not_relevant | 0 | 0 | not captured |
| popPK | Molinatti_1986 | irrelevant | 0 | 0 | The text is a general review of lactic acidosis and its association with phenformin, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Patil_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of glycolytic stimulants on ApoE lipidation in Alzheimer's disease cell models, with no pharmacokinetic parameters reported for phenformin. |
| popPK | Pezzino_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulin binding to cell lines, not a pharmacokinetic study reporting disposition parameters for phenformin. |
| popPK | Protti_2010 | irrelevant | 0 | 0 | The study investigates oxygen consumption and lactic acidosis in biguanide intoxication, not the pharmacokinetic disposition parameters (CL, V, ka) of phenformin. |
| popPK | Pryor_2015 | irrelevant | 0 | 0 | The paper is a review of metformin's molecular pharmacology and does not report pharmacokinetic parameters for phenformin. |
| PD | Pryor_2015 | not_relevant | 0 | 0 | The paper is a review of metformin's molecular pharmacology and does not report any pharmacodynamic or exposure-response data for phenformin. |
| popPK | Renz_2025 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy and metabolic modeling of phenformin, not its pharmacokinetic disposition parameters. |
| popPK | Sailer_1979 | irrelevant | 1 | 0 | The study measures serum phenformin concentrations to correlate with lactate levels and renal function, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Scheen_1995 | irrelevant | 0 | 0 | The paper is a review of drug interactions for antihyperglycaemic agents and mentions phenformin only as a withdrawn drug, without reporting any quantitative pharmacokinetic parameters. |
| PD | Scheen_1995 | not_relevant | 0 | 0 | The text is a general review of drug interactions in diabetes and mentions phenformin only in the context of its withdrawal, providing no pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Scheen_1996 | irrelevant | 0 | 0 | The paper is a review of metformin pharmacokinetics; phenformin is only mentioned as a comparator regarding metabolism. |
| PGx | Schlede_1985 | not_relevant | 0 | 0 | The paper studies benzo(a)pyrene metabolism in rats and only mentions phenformin as an example of a drug with a known genetic hydroxylation deficiency, without reporting any PK/PD data for phenformin. |
| popPK | Schneider_2026 | irrelevant | 0 | 0 | The study is an ex-vivo drug sensitivity screen for fibrolamellar carcinoma where phenformin is a test agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sebo_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action (mitochondrial complex I inhibition) of metformin and phenformin, not on quantitative pharmacokinetic parameters. |
| PD | Sebo_2026 | not_relevant | 2 | 0 | The paper describes the mechanism of action (mitochondrial complex I inhibition) and compares effects of single doses of metformin and phenformin, but it does not provide a quantitative exposure-response or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for phenformin. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a data mining study on OXPHOS inhibitors for ovarian cancer and does not report pharmacokinetic parameters for phenformin. |
| PD | Sharma_2024 | not_relevant | 0 | 0 | The paper focuses on data mining for OXPHOS inhibitors and does not mention phenformin or report any pharmacodynamic parameters for it. |
| popPK | Sharma_2024_2 | irrelevant | 0 | 0 | The study focuses on the synthesis and PK of novel LDHA inhibitors, with phenformin serving only as a co-administered comparator agent. |
| popPK | Sirtori_1978 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metformin, using phenformin only as a comparator for half-life. |
| PGx | Sogame_2013 | not_relevant | 2 | 0 | The paper reports in vitro transport kinetics of phenformin by hOCT2 but does not report a pharmacogenomic effect (gene variant) on a PK/PD parameter in humans. |
| popPK | Somlyai_2017 | irrelevant | 0 | 0 | The paper is a mechanistic review discussing structural homologies and metabolic targets, containing no quantitative pharmacokinetic parameters for phenformin. |
| PD | Somlyai_2017 | not_relevant | 1 | 0 | The paper is a qualitative review of structural homologies and metabolic mechanisms, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study focuses on the mechanism of lactic acidosis and transporter involvement, reporting EC50 values and lactate concentrations rather than pharmacokinetic disposition parameters (CL, V, ka) for phenformin. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper is a review of metformin toxicity and does not report quantitative pharmacokinetic parameters for phenformin. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes an immunochromatographic sensor for drug monitoring and reports antibody binding affinities (IC50), which are analytical/assay parameters, not pharmacodynamic (exposure-response) parameters for the drug's biological effect. |
| popPK | Yendapally_2020 | irrelevant | 1 | 0 | The paper is a review of phenformin, metformin, and imeglimin, and the provided evidence contains no quantitative pharmacokinetic parameter values for phenformin. |
| popPK | Yoon_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not phenformin. |
| PD | Yoon_2013 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PK) of metformin and the influence of genetic polymorphisms on PK parameters (CL/F, Vd/F), with no mention of phenformin or any pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Zhang_2007 | irrelevant | 0 | 0 | Phenformin is used only as an internal standard for the analysis of metformin and rosiglitazone, not as the subject drug for PK parameter estimation. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of protein stability (FSP27) where phenformin is used only as an AMPK activator, with no pharmacokinetic parameters reported. |
| PD | Zhigulin_2026 | not_relevant | 1 | 1 | The paper reports an IC50 range (3-13 μM) for phenformin, but this is a single-point potency estimate from a comparative electrophysiology study, not a full concentration-effect curve or PD model with derivable parameters like Emax or slope. |
| popPK | van_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for metformin, not phenformin. |
| PD | van_2018 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for metformin, focusing on clearance and covariates (weight), but does not report any pharmacodynamic (PD) or exposure-response relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
