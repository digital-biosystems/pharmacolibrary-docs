<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;pargyline&quot;}]"></div>

# pargyline

- **generic name:** pargyline
- **ATC codes:** `C02KC01`, `C02LL01`
- **DrugBank:** [DB01626](https://go.drugbank.com/drugs/DB01626) · **PubChem:** [CID 4688](https://pubchem.ncbi.nlm.nih.gov/compound/4688)
- **molar mass:** 159.2276 g/mol (C11H13N) — DrugBank
- **groups:** approved

## About

Pargyline is a monoamine oxidase inhibitor that was used as an antihypertensive drug to treat high blood pressure. Although it has approved status in some drug databases, it is no longer widely used in clinical practice today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q781329](https://www.wikidata.org/wiki/Q781329) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:18 | 3:44 | 0/0/0 | 0/0/0 | 0/0/0 | 31,423/2,161 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pargyline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 126 matched, 100 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Langeloh_1987.pdf` | Langeloh A et al., The mechanism of the 3H-noradrenaline r…, Naunyn-Schmiedeberg's archi… (1987) | pd | 5 | [10.1007/BF00165750](https://doi.org/10.1007/BF00165750) | [3444477](https://www.ncbi.nlm.nih.gov/pubmed/3444477) | metadata signals extractable PD data (IC50) |
| `Abrahamsen_1985.pdf` | Abrahamsen J et al., Accumulation of 3H-adrenaline by rabbit…, Blood vessels (1985) | pd | 4 | not captured | [3967097](https://www.ncbi.nlm.nih.gov/pubmed/3967097) | metadata signals extractable PD data (IC50) |
| `Abrahamsen_1991.pdf` | Abrahamsen J, Accumulation and release of adrenaline,…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01613.x](https://doi.org/10.1111/j.1600-0773.1991.tb01613.x) | [1762989](https://www.ncbi.nlm.nih.gov/pubmed/1762989) | metadata signals extractable PD data (IC50) |
| `Boeijinga_1993.pdf` | Boeijinga PH et al., Serotonergic modulation of neurotransmi…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00167229](https://doi.org/10.1007/BF00167229) | [8133898](https://www.ncbi.nlm.nih.gov/pubmed/8133898) | metadata signals extractable PD data (EC50) |
| `Fowler_1986.pdf` | Fowler CJ et al., Stimulation by noradrenaline of inosito…, The Journal of pharmacy and… (1986) | pd | 4 | [10.1111/j.2042-7158.1986.tb04544.x](https://doi.org/10.1111/j.2042-7158.1986.tb04544.x) | [2871155](https://www.ncbi.nlm.nih.gov/pubmed/2871155) | metadata signals extractable PD data (EC50) |
| `Hurst_1986.pdf` | Hurst JH et al., Inhibition of rat brainstem monoamine o…, Life sciences (1986) | pd | 4 | [10.1016/0024-3205(86)90553-9](https://doi.org/10.1016/0024-3205(86)90553-9) | [2430159](https://www.ncbi.nlm.nih.gov/pubmed/2430159) | metadata signals extractable PD data (IC50) |
| `Klein-Júnior_2016.pdf` | Klein-Júnior LC et al., The monoamine oxidase inhibitory activi…, Pharmaceutical biology (2016) | pd | 4 | [10.3109/13880209.2015.1102949](https://doi.org/10.3109/13880209.2015.1102949) | [26810928](https://www.ncbi.nlm.nih.gov/pubmed/26810928) | metadata signals extractable PD data (IC50) |
| `Lee_2006.pdf` | Lee MG et al., Histone H3 lysine 4 demethylation is a…, Chemistry & biology (2006) | pd | 4 | [10.1016/j.chembiol.2006.05.004](https://doi.org/10.1016/j.chembiol.2006.05.004) | [16793513](https://www.ncbi.nlm.nih.gov/pubmed/16793513) | metadata signals extractable PD data (IC50) |
| `May_1993.pdf` | May T, 1-Methyl-4-phenylpyridinium (MPP+) bind…, Neuroscience letters (1993) | pd | 4 | [10.1016/0304-3940(93)90558-3](https://doi.org/10.1016/0304-3940(93)90558-3) | [8121637](https://www.ncbi.nlm.nih.gov/pubmed/8121637) | metadata signals extractable PD data (IC50) |
| `Reeves_1991.pdf` | Reeves JJ et al., Investigation into the 5-hydroxytryptam…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12301.x](https://doi.org/10.1111/j.1476-5381.1991.tb12301.x) | [1878746](https://www.ncbi.nlm.nih.gov/pubmed/1878746) | metadata signals extractable PD data (concentration-effect) |
| `Robinson_1989.pdf` | Robinson TN et al., The mechanism of tetrahydroaminoacridin…, British journal of pharmaco… (1989) | pd | 4 | [10.1111/j.1476-5381.1989.tb12656.x](https://doi.org/10.1111/j.1476-5381.1989.tb12656.x) | [2611486](https://www.ncbi.nlm.nih.gov/pubmed/2611486) | metadata signals extractable PD data (IC50) |
| `Strait_1986.pdf` | Strait KA et al., Dopamine autoreceptor regulation of the…, Molecular pharmacology (1986) | pd | 4 | not captured | [2872588](https://www.ncbi.nlm.nih.gov/pubmed/2872588) | metadata signals extractable PD data (EC50) |
| `Wolfe_1978.pdf` | Wolfe BB et al., Presynaptic modulation of beta adrenerg…, The Journal of pharmacology… (1978) | pd | 4 | not captured | [213556](https://www.ncbi.nlm.nih.gov/pubmed/213556) | metadata signals extractable PD data (EC50) |
| `Ziance_1977.pdf` | Ziance RJ et al., Influence of MAO inhibitors on uptake a…, Archives internationales de… (1977) | pd | 4 | not captured | [921400](https://www.ncbi.nlm.nih.gov/pubmed/921400) | metadata signals extractable PD data (IC50) |
| `Shen_2010.pdf` | Shen HW et al., Effects of monoamine oxidase inhibitor…, Biochemical pharmacology (2010) | pgx | 8 | [10.1016/j.bcp.2010.02.020](https://doi.org/10.1016/j.bcp.2010.02.020) | [20206139](https://www.ncbi.nlm.nih.gov/pubmed/20206139) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nirogi_2015.pdf` | Nirogi R et al., Evaluation of metabolism dependent inhi…, Chemico-biological interact… (2015) | pgx | 7 | [10.1016/j.cbi.2015.01.028](https://doi.org/10.1016/j.cbi.2015.01.028) | [25656918](https://www.ncbi.nlm.nih.gov/pubmed/25656918) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Niwa_2011.pdf` | Niwa T et al., Human liver enzymes responsible for met…, Drug metabolism letters (2011) | pgx | 5 | [10.2174/187231211796905026](https://doi.org/10.2174/187231211796905026) | [21679153](https://www.ncbi.nlm.nih.gov/pubmed/21679153) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T16:17:46.861228+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agúndez_1998 | not_relevant | 0 | 0 | The paper studies the modulation of CYP1A2 activity by endogenous indoleamines and does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of pargyline. |
| PGx | Bajpai_2013 | not_relevant | 0 | 0 | The paper discusses the metabolism of MPTP by CYP2D6 and mentions pargyline only as a non-specific MAO-B inhibitor used to attenuate toxicity, without reporting any pharmacogenomic effects on pargyline's PK or PD parameters. |
| popPK | Baxter_1991 | irrelevant | 0 | 0 | The study is a pharmacological characterization of 5-HT4 receptors in rat tissue where pargyline is used only as a metabolic inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Baxter_1991 | not_relevant | 0 | 0 | The paper uses pargyline as a metabolic inhibitor to stabilize 5-HT, not as the drug of interest for which a pharmacodynamic exposure-response relationship is being characterized. |
| popPK | Baxter_1994 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization in rat tissue where pargyline is used only as a monoamine oxidase inhibitor tool compound, not as the subject of a pharmacokinetic analysis. |
| PD | Baxter_1994 | not_relevant | 0 | 0 | The paper uses pargyline as a tool compound (MAO inhibitor) to characterize 5-HT receptors, not as the drug of interest for a pharmacodynamic exposure-response analysis. |
| popPK | Boeijinga_1993 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Boeijinga_1993 | not_relevant | 0 | 0 | The paper reports PD parameters for serotonin and its receptor agonist/antagonists, but pargyline is used only as a tool compound (MAO inhibitor) to block reuptake, and no exposure-response or dose-response relationship for pargyline itself is reported. |
| popPK | Brown_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine mechanisms in guinea-pig tissues where pargyline is used only as a tool compound (MAO inhibitor), not as the subject of PK analysis. |
| PD | Brown_1990 | not_relevant | 1 | 2 | The paper reports a shift in the EC50 of dopamine in the presence of pargyline, but does not provide a dose-response curve or numeric parameters for pargyline itself. |
| popPK | Cession-Fossion_1966 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Cession-Fossion_1966 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess pharmacodynamic relationships. |
| popPK | Chetty_2006 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT3 receptors in the gut, where pargyline is used only as a tool compound (MAO inhibitor) to potentiate responses, not as the subject of a pharmacokinetic analysis. |
| PD | Chetty_2006 | not_relevant | 0 | 0 | The paper reports pargyline only as a qualitative potentiator of 5-HT3 responses in rat jejunum without providing numeric dose-response parameters or concentration-effect data for pargyline itself. |
| popPK | Conn_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of serotonin receptors in rat brain tissue where pargyline is used as a co-administered MAO inhibitor, not a PK study of pargyline. |
| PD | Conn_1985 | not_relevant | 3 | 2 | The paper reports an EC50 for serotonin in the presence of pargyline, but pargyline is used as a metabolic inhibitor to stabilize serotonin, not as the drug of interest for which a PD relationship is being characterized. |
| popPK | Eckert_1976 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline distribution in rabbit aortic strips where pargyline is used only as an enzyme inhibitor, not as the subject drug for PK analysis. |
| popPK | Feenstra_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MAO inhibition where pargyline is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Feenstra_1983 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for dopamine analogues and qualitatively compares their potency to pargyline, but does not provide numeric PD parameters or an exposure-response relationship for pargyline itself. |
| popPK | Fitzgerald_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of monoamine release in rat brain slices where pargyline is used only as a tool compound (MAO inhibitor), not as the subject of pharmacokinetic analysis. |
| PD | Fitzgerald_1993 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for MDMA and amphetamine, but pargyline is used only as a fixed-dose inhibitor (100 µmol/l) to modulate the effects of the primary drugs, with no dose-response or concentration-effect analysis performed for pargyline itself. |
| popPK | Fowler_1986 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Fowler_1986 | not_relevant | 0 | 0 | The paper investigates the effect of ambient potassium concentration on noradrenaline-stimulated inositol phospholipid breakdown in rat hippocampus and does not mention pargyline or report any pharmacodynamic parameters for it. |
| popPK | Gluck_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial respiration where pargyline is used only as a MAO inhibitor control, with no pharmacokinetic parameters reported. |
| PD | Gluck_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of dopamine-induced mitochondrial inhibition and mentions pargyline only as a qualitative inhibitor of MAO to confirm the metabolic pathway, without providing any dose-response data or numeric PD parameters for pargyline. |
| popPK | Guo_2021 | irrelevant | 0 | 0 | Pargyline is used only as a reference comparator for MAO-B inhibition, and the study focuses on the pharmacokinetics of a new compound (11g), not pargyline. |
| PD | Guo_2021 | not_relevant | 1 | 1 | The paper only mentions pargyline as a reference compound with a single IC50 value for MAO-B inhibition; it does not report a pharmacodynamic model, exposure-response relationship, or dose-effect curve for pargyline. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for pargyline. |
| popPK | Halberstadt_2016 | irrelevant | 1 | 0 | Pargyline is used as a co-administered MAO inhibitor to study the pharmacokinetics of 5-MeO-DMT, not as the subject drug for PK parameter extraction. |
| PD | Halberstadt_2016 | not_relevant | 2 | 1 | The paper reports qualitative behavioral interactions and PK changes (increased levels) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for pargyline. |
| PGx | He_2017 | not_relevant | 0 | 0 | The study investigates the effect of pargyline on CYP3A4/3A7 gene expression and histone methylation, not the effect of a genetic variant on pargyline's pharmacokinetics or pharmacodynamics. |
| popPK | Henseling_1976 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline distribution in rabbit aortic strips where pargyline is used only as an enzyme inhibitor, not as the subject drug for PK analysis. |
| popPK | Henseling_1976_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of noradrenaline distribution in rabbit aortic strips where pargyline is used only as an enzyme inhibitor, not as the subject drug for PK analysis. |
| popPK | Hsu_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuromuscular blockade in mouse phrenic nerve-diaphragm, and pargyline is only mentioned as a comparator MAO inhibitor with no pharmacokinetic parameters reported. |
| PD | Hsu_1993 | not_relevant | 0 | 0 | The paper studies the interaction between MPTP and 4-phenylpyridine; pargyline is only mentioned as a negative control that did not potentiate the effect, and no PD parameters are reported for pargyline. |
| popPK | Hurst_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of CGP 6085 A, with pargyline serving only as a comparator for in vitro potency, and no pharmacokinetic parameters are reported. |
| PD | Hurst_1986 | not_relevant | 3 | 2 | The paper reports in vitro IC50 and in vivo dose-response data for CGP 6085 A, but only mentions pargyline as a potency comparator without providing specific numeric PD parameters or exposure-response data for pargyline itself. |
| popPK | Jangid_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-Alzheimer's ligands where pargyline is used only as a standard comparator for MAO-B inhibition, with no pharmacokinetic parameters reported. |
| PD | Jangid_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel compounds using pargyline only as a qualitative docking standard, and does not provide any pharmacodynamic or exposure-response data for pargyline itself. |
| popPK | Karoum_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of dopamine release and metabolism in rat brain, with pargyline mentioned only as a co-administered agent in one context, and no pharmacokinetic parameters for pargyline are reported. |
| PD | Karoum_1994 | not_relevant | 0 | 0 | The paper studies amphetamine, cocaine, nomifensine, and GBR 12909; pargyline is not the subject of the study and no PD parameters for it are reported. |
| popPK | Klein-Júnior_2016 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Klein-Júnior_2016 | not_relevant | 0 | 0 | The paper focuses on the MAO inhibitory activity of essential oils from Eryngium species and does not mention pargyline or report any pharmacodynamic parameters for it. |
| popPK | Kulikova_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel MAO inhibitors where pargyline is used only as a comparator for potency, with no pharmacokinetic parameters reported. |
| PD | Kulikova_2023 | not_relevant | 1 | 1 | The paper reports a single IC50 value for a novel compound and compares it to pargyline, but does not provide a concentration-effect curve, dose-response data, or PK/PD model for pargyline itself. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The study is an in-vitro/in-silico investigation of MAO inhibitors where pargyline is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| PD | Kumar_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and Ki values for new compounds, comparing them qualitatively to pargyline, but does not provide numeric PD parameters or an exposure-response relationship for pargyline itself. |
| popPK | Langeloh_1987 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Langeloh_1987 | not_relevant | 0 | 0 | The paper focuses on the mechanism of 3H-noradrenaline release by uptake1 substrates and does not report pharmacodynamic or exposure-response data for pargyline. |
| popPK | Lee_2006 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Lee_2006 | not_relevant | 0 | 0 | The paper discusses histone demethylation as a target of antidepressants but does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for pargyline. |
| popPK | Liang_2004 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception in mice where pargyline is used as a co-administered agent, and no pharmacokinetic parameters are reported. |
| popPK | Manoharan_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO-B inhibitors where pargyline is used only as a reference comparator for in-vitro potency, with no pharmacokinetic data reported. |
| PD | Manoharan_2023 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and Ki values for new MAO-B inhibitors and compares them to pargyline, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for pargyline itself. |
| popPK | Maschauer_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and binding of the PET ligand [(18)F]fluoroethyl-harmol, using pargyline only as a competitive inhibitor to block MAO-A, not as the subject drug. |
| popPK | Matsumura_2013 | irrelevant | 0 | 0 | The study focuses on the anticonvulsant properties of indazole, with pargyline serving only as a comparator agent and no pharmacokinetic parameters for pargyline are reported. |
| PD | Matsumura_2013 | not_relevant | 0 | 0 | The paper focuses on the anticonvulsant properties of indazole; pargyline is only mentioned as a comparator MAO inhibitor that did not reproduce the effect, with no PD or exposure-response data provided for pargyline. |
| popPK | May_1993 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | May_1993 | not_relevant | 0 | 0 | The paper describes the binding affinity of MPP+ to MAO-A and does not report any pharmacodynamic or exposure-response data for pargyline. |
| popPK | McLean_1995 | irrelevant | 0 | 0 | Pargyline is used only as a non-specific MAO inhibitor (co-administered with cocaine) in an in-vitro receptor pharmacology study, with no pharmacokinetic parameters reported. |
| PD | McLean_1995 | not_relevant | 0 | 0 | Pargyline is used only as a non-specific uptake/metabolism inhibitor to test for changes in 5-HT potency; no exposure-response or dose-response relationship for pargyline itself is reported. |
| popPK | Metting_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norepinephrine in rat lungs, using pargyline only as a metabolic inhibitor/comparator, not as the subject drug. |
| popPK | Milne_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PYCR1 inhibitors where pargyline serves only as a starting fragment/comparator, and no pharmacokinetic parameters are reported. |
| PD | Milne_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme IC50 values for pargyline derivatives, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system or PK/PD model. |
| popPK | Mishra_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anticonvulsant effects in rats where pargyline is used only as a pretreatment agent, with no pharmacokinetic parameters reported. |
| popPK | Moret_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of 5-HT autoreceptors using pargyline as a pharmacological tool, reporting no pharmacokinetic parameters. |
| PD | Moret_1988 | not_relevant | 3 | 2 | The paper describes qualitative antagonism of pargyline's effect by other drugs but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative concentration-effect curve for pargyline itself. |
| popPK | Moroi-Fetters_1995 | irrelevant | 0 | 0 | Pargyline is used only as a non-specific MAO inhibitor to potentiate epinephrine effects in an in vitro receptor binding/coupling study, with no pharmacokinetic parameters reported. |
| PD | Moroi-Fetters_1995 | not_relevant | 1 | 0 | The paper reports an EC50 for epinephrine, not pargyline; pargyline is only mentioned qualitatively as a potentiator at a fixed concentration. |
| popPK | Nabeshima_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of naftidrofuryl oxalate on amnesia, using pargyline only as a co-administered agent to induce a behavioral state, with no pharmacokinetic parameters reported. |
| PD | Nabeshima_1991 | not_relevant | 0 | 0 | The paper focuses on naftidrofuryl oxalate; pargyline is used only as a tool compound to induce amnesia, and no exposure-response or dose-response PD parameters are reported for pargyline. |
| popPK | Ni_2004 | irrelevant | 0 | 0 | The study is a mechanistic investigation of serotonin transporter function in arterial smooth muscle, using pargyline only as a pharmacological tool to inhibit MAO, and does not report any pharmacokinetic parameters for pargyline. |
| PD | Ni_2004 | not_relevant | 1 | 0 | The paper reports a qualitative increase in 5-HT concentration with pargyline but does not provide a dose-response curve, Emax, or any numeric PD parameters for pargyline itself. |
| popPK | Nirogi_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 inhibition by pargyline and does not report any pharmacokinetic disposition parameters (CL, V, t1/2) for pargyline. |
| PD | Nirogi_2015 | not_relevant | 3 | 2 | The study reports in vitro enzyme inactivation parameters (KI, kinact) and predicted DDI fold-changes, but does not provide a pharmacodynamic exposure-response or dose-response relationship for pargyline in vivo or in a PK/PD context. |
| PGx | Nirogi_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving bupropion and MAOIs, not the pharmacogenomics of pargyline. |
| PGx | Niwa_2011 | not_relevant | 0 | 0 | The paper studies the metabolism of tyramine, not pargyline; pargyline is used only as an inhibitor in the assay. |
| popPK | Noce_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on a new dual inhibitor (compound 9a) that contains a pargyline moiety, but it does not report pharmacokinetic parameters for pargyline itself. |
| PD | Noce_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a new compound (9a) and qualitative cellular effects, but does not report a pharmacodynamic or exposure-response relationship for pargyline itself. |
| popPK | Obata_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dopamine oxidation and hydroxyl radical formation in rat striatum, not a pharmacokinetic study of pargyline. |
| PD | Obata_1999 | not_relevant | 2 | 1 | The paper reports EC50/Emax for MPP+ (not pargyline) and only provides a single qualitative observation for pargyline at 10 mM without a dose-response curve or numeric PD parameters for pargyline. |
| popPK | Oh_2020 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme inhibition study where pargyline is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| PD | Oh_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50/Ki) for novel chalcone oxime ethers, using pargyline only as a reference standard, and does not report any pharmacokinetic or pharmacodynamic exposure-response relationship for pargyline. |
| popPK | Paiva_1984 | irrelevant | 0 | 0 | The study investigates the metabolism of 5-hydroxytryptamine (5-HT) in dog saphenous veins, using pargyline only as a pharmacological tool to inhibit metabolism, rather than studying pargyline's own pharmacokinetics. |
| PGx | Petersen_1977 | not_relevant | 2 | 5 | The paper studies the effect of pargyline on acetaldehyde levels (a PD parameter) in the context of ALDH isozyme induction, but does not report a pharmacogenomic effect (gene variant/genotype) on pargyline's PK or PD parameters. |
| popPK | Raasch_1999 | irrelevant | 0 | 0 | The study focuses on the mechanism of MAO inhibition and reports IC50 values and percent inhibition, but does not provide pharmacokinetic parameters (CL, V, t1/2) for pargyline. |
| PD | Raasch_1999 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for various compounds and a single qualitative in vivo effect percentage for pargyline (-95%), but lacks a dose-response curve, exposure-response analysis, or numeric PD parameters (like Emax/EC50) for pargyline specifically. |
| popPK | Racké_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release where pargyline is used as a tool compound, not a pharmacokinetic study of pargyline. |
| PD | Racké_1990 | not_relevant | 0 | 0 | Pargyline is used only as a non-specific MAO inhibitor to prevent dopamine metabolism; no concentration-effect or dose-response relationship for pargyline itself is reported. |
| popPK | Reeves_1991 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Reeves_1991 | not_relevant | 0 | 0 | The paper investigates serotonin receptor mechanisms in rat esophagus and does not mention pargyline or report any pharmacodynamic parameters for it. |
| popPK | Robinson_1989 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Robinson_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of neurotransmitter release evoked by tetrahydroaminoacridine and does not report any pharmacodynamic or exposure-response data for pargyline. |
| popPK | Sahin-Erdemli_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors in guinea-pig iliac artery where pargyline is used only as a non-significant comparator agent, with no pharmacokinetic parameters reported. |
| PD | Sahin-Erdemli_1991 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in isolated tissue and explicitly states that pargyline had no significant effect, providing no exposure-response or dose-response data for pargyline. |
| popPK | Schömig_1987 | irrelevant | 0 | 0 | The study is a mechanistic simulation of noradrenaline transport in rat tissues where pargyline is used only as a pretreatment agent, not as the subject of pharmacokinetic analysis. |
| PGx | Shen_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of 5-MeO-DMT, not pargyline; pargyline is used only as an inhibitor to modulate the metabolism of the study drug. |
| popPK | Strait_1986 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Strait_1986 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of dopamine autoreceptor regulation of tyrosine hydroxylase and does not report pharmacokinetic or pharmacodynamic exposure-response data for pargyline. |
| popPK | Takao_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO-B inhibitors where pargyline is used only as a positive control for potency comparison, with no pharmacokinetic data reported. |
| PD | Takao_2018 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel MAO-B inhibitors and compares them to pargyline, but does not report a pharmacodynamic (exposure-response) model or numeric PD parameters for pargyline itself. |
| popPK | Takao_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on MAO inhibitors where pargyline is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Takao_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel MAO inhibitors using pargyline only as a qualitative positive control, without providing any exposure-response, dose-response curve, or numeric PD parameters for pargyline itself. |
| popPK | Trendelenburg_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of noradrenaline metabolism in rat hearts using pargyline as an enzyme inhibitor, not the pharmacokinetics of pargyline itself. |
| popPK | Venkidath_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new MAO-B/BACE1 inhibitors where pargyline is used only as a standard comparator for IC50 values, with no pharmacokinetic parameters reported. |
| PD | Venkidath_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for new compounds, using pargyline only as a standard comparator, and contains no pharmacokinetic or pharmacodynamic modeling or exposure-response analysis. |
| popPK | Vieira-Coelho_1996 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic assay of COMT activity where pargyline is used as a stabilizer in the buffer, not as the subject drug for pharmacokinetic analysis. |
| PD | Vieira-Coelho_1996 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Vmax, Km, IC50) for tolcapone inhibition of COMT, not a pharmacodynamic exposure-response or dose-response relationship for pargyline in vivo. |
| popPK | Wolfe_1978 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Wolfe_1978 | not_relevant | 0 | 0 | The paper focuses on presynaptic modulation of beta-adrenergic receptors in rat cerebral cortex and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for pargyline. |
| popPK | Wright_2022 | irrelevant | 0 | 0 | The study focuses on the binding of the PET tracer [18F]flortaucipir to MAO-A/B, using pargyline only as a blocking agent, and does not report pharmacokinetic parameters for pargyline. |
| PD | Wright_2022 | not_relevant | 2 | 2 | The paper reports in vitro binding affinities (IC50, Kd) and qualitative PET observations regarding pargyline, but does not provide a pharmacodynamic exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for pargyline. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel coumarin-pargyline hybrids, not a pharmacokinetic study of pargyline itself, and contains no PK parameters. |
| PD | Yang_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel coumarin-pargyline hybrids, not pharmacodynamic or exposure-response data for the drug pargyline itself. |
| popPK | Yildiz_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptors in rabbit iliac artery where pargyline is used only as a tool compound, with no pharmacokinetic parameters reported. |
| PD | Yildiz_1993 | not_relevant | 0 | 0 | The paper reports that pargyline had no significant effect on the contractions induced by 5-HT or sumatriptan, providing no numeric PD parameters or exposure-response relationship for pargyline. |
| popPK | Yildiz_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors in rabbit mesenteric artery where pargyline is used only as a non-pharmacokinetic tool compound, with no PK parameters reported. |
| PD | Yildiz_1995 | not_relevant | 0 | 0 | The paper reports that pargyline had no significant effect on the contractions, providing no numeric PD parameters or exposure-response relationship for pargyline. |
| PGx | Yu_2003 | not_relevant | 0 | 0 | The paper investigates the metabolism of tryptamine and uses pargyline only as a tool compound to demonstrate lack of cross-inhibition with CYP2D6, rather than reporting pharmacogenomic effects on pargyline's PK/PD. |
| PGx | Yu_2003_2 | not_relevant | 0 | 0 | The paper investigates the metabolism of 5-methoxytryptamine by CYP2D6 and does not report pharmacokinetic or pharmacodynamic parameters for pargyline. |
| popPK | Ziance_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MAO inhibition on norepinephrine uptake, not a pharmacokinetic study reporting disposition parameters for pargyline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
