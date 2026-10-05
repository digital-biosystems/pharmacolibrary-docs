<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;metronidazole&quot;}]"></div>

# metronidazole

- **generic name:** metronidazole
- **ATC codes:** `A01AB17`, `A02BD01`, `A02BD02`, `A02BD03`, `A02BD08`, `A02BD11`, `A02BD13`, `A02BD15`, `D06BX01`, `G01AF01`, `J01RA03`, `J01RA04`, `J01RA10`, `J01RA14`, `J01XD01`, `P01AB01`, `P01AB51`, `P01AB52`
- **DrugBank:** [DB00916](https://go.drugbank.com/drugs/DB00916) · **PubChem:** [CID 4173](https://pubchem.ncbi.nlm.nih.gov/compound/4173)
- **molar mass:** 171.154 g/mol (C6H9N3O3) — DrugBank
- **groups:** approved, investigational

## About

Metronidazole is an antibacterial and antiprotozoal drug used to treat infections such as bacterial vaginosis, amebiasis, giardiasis, abscesses, rosacea, and to help eradicate Helicobacter pylori. It is widely used around the world and appears on the WHO essential medicines list, available in oral, topical, and gynecological formulations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q169569](https://www.wikidata.org/wiki/Q169569) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metronidazole | parent | 171.154 | C6H9N3O3 | DrugBank | [4173](https://pubchem.ncbi.nlm.nih.gov/compound/4173) | Suyagh_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 01:57 | 4:35 | 0/1/0 | 0/0/0 | 0/0/0 | 89,641/8,858 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/15 | 17/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Suyagh_2011_reference](drugs/drug_metronidazole/Metronidazole_Suyagh2011_reference.md) | — | 1-compartment (no model) | 0 | Suyagh M et al., Metronidazole population pharmacokineti…, Pediatrics (2011) | [10.1542/peds.2010-0807](https://doi.org/10.1542/peds.2010-0807) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metronidazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inhibitor, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Anaerobic bacterial DNA (inhibitor), Protozoal DNA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 267 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Child_2019.pdf` | Child J et al., Pharmacokinetic and Pharmacodynamic Pro…, Journal of the Pediatric In… (2019) | popPK | 10 | [10.1093/jpids/piy040](https://doi.org/10.1093/jpids/piy040) | [29788329](https://pubmed.ncbi.nlm.nih.gov/29788329) | The study is a population PK/PD analysis of metronidazole in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only AUC target attainment percentages. |
| `Randell_2024.pdf` | Randell RL et al., Opportunistic dried blood spot sampling…, Antimicrobial agents and ch… (2024) | popPK | 10 | [10.1128/aac.01533-23](https://doi.org/10.1128/aac.01533-23) | [38477706](https://pubmed.ncbi.nlm.nih.gov/38477706) | The paper describes a population pharmacokinetic model for metronidazole in infants, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Ryan_2026.pdf` | Ryan R et al., Population pharmacokinetics of cefazoli…, International journal of an… (2026) | popPK | 10 | [10.1016/j.ijantimicag.2026.107742](https://doi.org/10.1016/j.ijantimicag.2026.107742) | [41690639](https://pubmed.ncbi.nlm.nih.gov/41690639) | The study reports a population PK model for metronidazole, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Suyagh_2011.pdf` | Suyagh M et al., Metronidazole population pharmacokineti…, Pediatrics (2011) | popPK | 10 | [10.1542/peds.2010-0807](https://doi.org/10.1542/peds.2010-0807) | [21220396](https://pubmed.ncbi.nlm.nih.gov/21220396) | The paper reports a population pharmacokinetic model for metronidazole in preterm neonates with explicit numeric equations for clearance and volume of distribution. |
| `Cao_2007.pdf` | Cao YG et al., Warfarin maintenance dose adjustment wi…, European journal of pharmac… (2007) | pd | 5 | [10.1016/j.ejps.2006.10.009](https://doi.org/10.1016/j.ejps.2006.10.009) | [17169538](https://www.ncbi.nlm.nih.gov/pubmed/17169538) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Isla_2005.pdf` | Isla A et al., [Pharmacokinetic/pharmacodynamic analys…, Enfermedades infecciosas y… (2005) | pd | 5 | [10.1157/13072159](https://doi.org/10.1157/13072159) | [15757581](https://www.ncbi.nlm.nih.gov/pubmed/15757581) | metadata signals extractable PD data (PK/PD) |
| `Isla_2008.pdf` | Isla A et al., [Antibiotic therapy in odontogenic infe…, Enfermedades infecciosas y… (2008) | pd | 5 | [10.1016/s0213-005x(08)75278-9](https://doi.org/10.1016/s0213-005x(08)75278-9) | [19100192](https://www.ncbi.nlm.nih.gov/pubmed/19100192) | metadata signals extractable PD data (PK/PD) |
| `Kita_2001.pdf` | Kita T et al., CYP2C19 genotype related effect of omep…, Pharmaceutical research (2001) | pgx | 8 | [10.1023/a:1011025125163](https://doi.org/10.1023/a:1011025125163) | [11465416](https://www.ncbi.nlm.nih.gov/pubmed/11465416) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Maev_2017.pdf` | Maev IV et al., [Molecular genetic predictors of resist…, Terapevticheskii arkhiv (2017) | pgx | 8 | [10.17116/terarkh20178985-12](https://doi.org/10.17116/terarkh20178985-12) | [28914844](https://www.ncbi.nlm.nih.gov/pubmed/28914844) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Stancil_2019.pdf` | Stancil SL et al., Evaluating metronidazole as a novel, sa…, British journal of clinical… (2019) | pgx | 8 | [10.1111/bcp.13884](https://doi.org/10.1111/bcp.13884) | [30706508](https://www.ncbi.nlm.nih.gov/pubmed/30706508) | metadata signals extractable PGX data (CYP2A6, PK/PD-context) |
| `Wang_2000.pdf` | Wang JS et al., Effects of metronidazole on midazolam m…, European journal of clinica… (2000) | pgx | 7 | [10.1007/s002280000201](https://doi.org/10.1007/s002280000201) | [11151744](https://www.ncbi.nlm.nih.gov/pubmed/11151744) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wang_2017.pdf` | Wang R et al., The effects of metronidazole on Cytochr…, Biomedicine & pharmacothera… (2017) | pgx | 7 | [10.1016/j.biopha.2016.11.024](https://doi.org/10.1016/j.biopha.2016.11.024) | [27899252](https://www.ncbi.nlm.nih.gov/pubmed/27899252) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Yu_2021.pdf` | Yu X et al., Pharmacokinetic Drug-drug Interaction o…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200221666200929115117](https://doi.org/10.2174/1389200221666200929115117) | [32990533](https://www.ncbi.nlm.nih.gov/pubmed/32990533) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Kurzawski_2006.pdf` | Kurzawski M et al., Effect of CYP2C19*17 gene variant on He…, European journal of clinica… (2006) | pgx | 5 | [10.1007/s00228-006-0183-2](https://doi.org/10.1007/s00228-006-0183-2) | [16912869](https://www.ncbi.nlm.nih.gov/pubmed/16912869) | metadata signals extractable PGX data (CYP2C19*17) |
| `Sezgin_2014.pdf` | Sezgin O et al., Modified sequential Helicobacter pylori…, Acta gastro-enterologica Be… (2014) | pgx | 5 | not captured | [24761684](https://www.ncbi.nlm.nih.gov/pubmed/24761684) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04T01:53:58.421367+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Attia_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions affecting omeprazole metabolism, not the pharmacogenomics of metronidazole. |
| PGx | Auttajaroon_2019 | not_relevant | 0 | 0 | The study investigates the association between CYP2C19 genotype and H. pylori antibiotic resistance (metronidazole MIC), not the pharmacokinetic or pharmacodynamic parameters of metronidazole in the host. |
| PGx | Basyoni_2018 | not_relevant | 0 | 0 | The study investigates the anti-parasitic efficacy of atorvastatin and metronidazole in mice, not the effect of human gene variants on metronidazole pharmacokinetics or pharmacodynamics. |
| popPK | Cao_2007 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Cao_2007 | not_relevant | 0 | 0 | The paper focuses on warfarin pharmacodynamics in rats and does not report any exposure-response or dose-response data for metronidazole. |
| PGx | Cheng_2026 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of a bacterium (Dubosiella newyorkensis) on hyperuricemia and does not report any pharmacogenomic effects on the PK or PD of metronidazole. |
| popPK | Child_2019 | relevant | 10 | 2 | The study is a population PK/PD analysis of metronidazole in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text, only AUC target attainment percentages. |
| popPK | Commander_2023 | irrelevant | 2 | 0 | The study uses an existing population PK model to simulate exposure for an exposure-response analysis of seizures, but does not report the quantitative PK parameter values (CL, V, etc.) for metronidazole itself. |
| PGx | Early_2016 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between metronidazole and tacrolimus, not a pharmacogenomic effect on metronidazole's PK/PD parameters. |
| PGx | Fernandez_2026 | not_relevant | 0 | 0 | The paper reports a case of metronidazole resistance in H. pylori due to antibiotic susceptibility testing, not a pharmacogenomic effect on the patient's PK or PD parameters. |
| PGx | Fernández-Reyes_2019 | not_relevant | 0 | 0 | The paper reports bacterial antimicrobial resistance rates and virulence factor prevalence, not human pharmacogenomic effects on metronidazole PK/PD. |
| PGx | Furuta_2007 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for PPIs (CYP2C19) and drug interactions involving clarithromycin, but does not report any genetic effect on the PK or PD of metronidazole. |
| popPK | Hakkers_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of metronidazole as an adjunctive antibiotic for peri-implantitis, not a pharmacokinetic study, and reports no PK parameters. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper focuses on predicting drug-drug interactions for busulfan using network pharmacology and does not report pharmacogenomic effects on metronidazole PK/PD parameters. |
| PGx | Hersh_2015 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (metronidazole inhibiting warfarin metabolism) but does not report pharmacogenomic effects (gene variants) on metronidazole's PK or PD parameters. |
| popPK | Ho_2022 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotic resistance rates in H. pylori, not a pharmacokinetic study of metronidazole. |
| PGx | Imane_2022 | not_relevant | 0 | 0 | The study examines bacterial resistance to metronidazole (rdxA gene) and bacterial virulence factors (CagA/VacA), not human pharmacogenomics affecting drug PK/PD. |
| popPK | Isla_2005 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Isla_2005 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, models, or parameters to assess PD relationships. |
| popPK | Isla_2005_2 | irrelevant | 2 | 0 | The study is a retrospective literature review and simulation that uses metronidazole as a comparator for efficacy indices, but it does not report original quantitative PK parameter values (CL, V, etc.) for metronidazole in the provided evidence. |
| PD | Isla_2005_2 | not_relevant | 3 | 2 | The paper is a retrospective literature review and simulation study that calculates PK/PD indices (AUC/MIC, %T&gt;MIC) for comparison with breakpoints, but it does not report a concentration-effect curve or specific PD parameters (Emax, EC50) for metronidazole. |
| popPK | Isla_2008 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Isla_2008 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or analysis results. |
| PGx | Kaur_2019 | not_relevant | 0 | 0 | The paper is a case report of metronidazole neurotoxicity and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Kita_2001 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2C19 genotype on omeprazole PK and intragastric pH, not on the PK or PD parameters of metronidazole. |
| PGx | Kudo_2015 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (metronidazole downregulating CYP enzymes) in vitro, not the effect of a gene variant on metronidazole's PK/PD. |
| PGx | Kurzawski_2006 | not_relevant | 0 | 0 | The study investigates the effect of CYP2C19 variants on H. pylori eradication efficacy (clinical outcome) in a regimen containing metronidazole, but does not report pharmacokinetic or pharmacodynamic parameters of metronidazole itself. |
| PGx | Lang_2025 | not_relevant | 0 | 0 | The paper evaluates the effect of a dietary intervention on biochemical markers in patients with a genetic disease, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of metronidazole. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses CYP450-mediated drug interactions for antiepileptics and mentions metronidazole only as an inhibitor, without reporting pharmacogenomic effects on metronidazole's PK/PD. |
| PGx | Lippi_2014 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antibiotics and DOACs, not pharmacogenomic effects on metronidazole. |
| PGx | Maev_2017 | not_relevant | 0 | 0 | The paper discusses microbial genetic resistance to metronidazole and host genetics affecting PPIs, but does not report a pharmacogenomic effect on the PK or PD of metronidazole itself. |
| popPK | McKellar_2004 | irrelevant | 1 | 0 | The paper is a review discussing general PK/PD principles and classifying metronidazole as concentration-dependent, but it does not report specific quantitative disposition parameters (CL, V, etc.) for metronidazole. |
| PD | McKellar_2004 | not_relevant | 2 | 1 | The text is a general review that qualitatively classifies metronidazole as concentration-dependent and provides general PK/PD index thresholds (AUC/MIC, Cmax/MIC) for the class, but it does not report specific numeric PD parameters (e.g., Emax, EC50) or a derived concentration-effect curve for metronidazole. |
| PGx | Pizarro_2025 | not_relevant | 0 | 0 | The study investigates extracellular vesicle-mediated drug resistance in the parasite Giardia lamblia, not human pharmacogenomics or PK/PD parameters. |
| popPK | Randell_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for metronidazole in infants, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| PD | Randell_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the validation and optimization of a population pharmacokinetic (PK) model using dried blood spots, with no mention of pharmacodynamic (PD) modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Randell_2025 | relevant | 8 | 2 | The study uses a population PK model for metronidazole in infants to simulate exposures, but the specific model parameter values (CL, V, Q) are not reported in the text, only the resulting exposure metrics (AUC, Cmax). |
| PGx | Ranek_1993 | not_relevant | 0 | 0 | The study reports that metronidazole metabolism was within normal range in all subjects and does not report any gene variant or genotype associated with altered PK/PD parameters. |
| popPK | Ryan_2026 | relevant | 10 | 2 | The study reports a population PK model for metronidazole, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Saghaug_2019 | not_relevant | 0 | 0 | The paper investigates genetic variation in the parasite (Giardia) that affects drug resistance, not human pharmacogenomics affecting drug PK/PD. |
| PGx | Saghaug_2020 | not_relevant | 0 | 0 | The paper analyzes genetic diversity of a parasite gene (Giardia gFlHb) and its potential role in drug tolerance, but does not report human pharmacogenomic effects on metronidazole PK or PD parameters. |
| PGx | Sezgin_2014 | not_relevant | 0 | 0 | The paper investigates the effect of CYP2C19 polymorphism on H. pylori eradication rates (clinical outcome), not on the pharmacokinetic or pharmacodynamic parameters of metronidazole. |
| PGx | Shelton_2000 | not_relevant | 0 | 0 | The paper describes a case of hyperventilation associated with quetiapine and mentions metronidazole as a potential CYP3A4 inhibitor, but it does not report a pharmacogenomic effect (gene variant) on a PK or PD parameter of metronidazole. |
| popPK | Sher_2022 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract, using metronidazole only as an agent to induce constipation in pigeons, and does not report any pharmacokinetic parameters for metronidazole. |
| PD | Sher_2022 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Chrozophora tinctoria extract, not metronidazole; metronidazole is only used as a tool to induce constipation in the animal model. |
| PGx | Spielberg_1984 | not_relevant | 2 | 1 | The paper reports in vitro cellular toxicity susceptibility to metronidazole metabolites, not changes in pharmacokinetic or pharmacodynamic parameters in vivo. |
| PGx | Sugimoto_2020 | not_relevant | 0 | 0 | The paper investigates the effect of CYP genotypes on the clinical outcome (eradication rate) of vonoprazan-containing therapy, not on the pharmacokinetic or pharmacodynamic parameters of metronidazole. |
| PGx | Sukkamolsantiporn_2025 | not_relevant | 0 | 0 | The study evaluates H. pylori eradication efficacy and does not report pharmacokinetic or pharmacodynamic parameters for metronidazole. |
| PGx | Sweiss_2019 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between busulfan and blinatumomab, not a pharmacogenomic effect on metronidazole. |
| popPK | Tan_2017 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy (cure rates) for bacterial vaginosis, not a pharmacokinetic study, and contains no PK parameters. |
| PGx | Tungtrongchitr_2024 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of an H. pylori eradication regimen and does not report pharmacokinetic or pharmacodynamic parameters of metronidazole. |
| PGx | Wang_2000 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (metronidazole affecting midazolam) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of metronidazole. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The study investigates the effect of metronidazole on CYP450 enzymes in rats exposed to high altitude, rather than the effect of a gene variant on metronidazole pharmacokinetics or pharmacodynamics. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper investigates bacterial gene mutations (H. pylori) causing antibiotic resistance, not human pharmacogenomics affecting metronidazole PK/PD. |
| PGx | Yu_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DDI) involving enzymes and transporters, not pharmacogenomic effects (gene variants) on metronidazole PK/PD. |
| popPK | Zelenitsky_2016 | irrelevant | 2 | 0 | The study is a PK-PD simulation using existing models for antimicrobial prophylaxis, and it does not report original quantitative PK parameter values (CL, V, etc.) for metronidazole in the provided evidence. |
| PD | Zelenitsky_2016 | not_relevant | 4 | 2 | The study uses PK-PD modeling (target attainment) but reports only binary coverage percentages (e.g., 99% of subjects) rather than continuous numeric PD parameters like Emax, EC50, or dose-response curves for metronidazole. |
| PGx | Zemanová_2021 | not_relevant | 0 | 0 | The study investigates the effect of gut microbiome presence (germ-free vs. specific-pathogen-free) on metronidazole metabolism, not a specific human gene variant or genotype. |
| popPK | Zhanel_2013 | irrelevant | 0 | 0 | The paper is a review of ceftazidime-avibactam pharmacokinetics and does not report quantitative PK parameters for metronidazole. |
| popPK | Zhanel_2014 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of ceftolozane/tazobactam, and metronidazole is only mentioned as a comparator agent in a clinical trial without any PK parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 01:54 UTC</sub>
