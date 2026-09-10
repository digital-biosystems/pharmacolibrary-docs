# esomeprazole

- **generic name:** esomeprazole
- **ATC codes:** `A02BC05`, `M01AE52`
- **DrugBank:** [DB00736](https://go.drugbank.com/drugs/DB00736)
- **groups:** approved, investigational

## About

**Description.** Esomeprazole, sold under the brand name Nexium, is a proton pump inhibitor (PPI) medication used for the management of gastroesophageal reflux disease (GERD), for gastric protection to prevent recurrence of stomach ulcers or gastric damage from chronic use of NSAIDs, and for the treatment of pathological hypersecretory conditions including Zollinger-Ellison (ZE) Syndrome. It can also be found in quadruple regimens for the treatment of _H. pylori_ infections along with other antibiotics including [DB01060], [DB01211], and [DB00916], for example.[A177271, F4498] Its efficacy is considered similar to other medications within the PPI class including [DB00338], [DB00213], [DB00448], [DB05351], and [DB01129]. Esomeprazole is the s-isomer of [DB00338], which is a racemate of the S- and R-enantiomer. Esomeprazole has been shown to inhibit acid secretion to a similar extent as [DB00338], without any significant differences between the two compounds _in vitro_. 

Esomeprazole exerts its stomach acid-suppressing effects by preventing the final step in gastric acid production by covalently binding to sulfhydryl groups of cysteines found on the (H+, K+)-ATPase enzyme at the secretory surface of gastric parietal cells. This effect leads to inhibition of both basal and stimulated gastric acid secretion, irrespective of the stimulus. As the binding of esomeprazole to the (H+, K+)-ATPase enzyme is irreversible and new enzyme needs to be expressed in order to resume acid secretion, esomeprazole's duration of antisecretory effect persists longer than 24 hours.[FDA Label]

PPIs such as esomeprazole have also been shown to inhibit the activity of dimethylarginine dimethylaminohydrolase (DDAH), an enzyme necessary for cardiovascular health. DDAH inhibition causes a consequent accumulation of the nitric oxide synthase inhibitor asymmetric dimethylarginie (ADMA), which is thought to cause the association of PPIs with increased risk of cardiovascular events in patients with unstable cor

**Indication.** Esomeprazole is indicated for the treatment of acid-reflux disorders including healing and maintenance of erosive esophagitis, and symptomatic gastroesophageal reflux disease (GERD), peptic ulcer disease, H. pylori eradication, prevention of gastrointestinal bleeds with NSAID use, and for the long-term treatment of pathological hypersecretory conditions including Zollinger-Ellison Syndrome.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 14:54 | 4:36 | 1/2/0 | 0/1/0 | 0/0/0 | 91,570/12,977 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 3/2 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chung_2022](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Gebreyesus_2022](drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md) | Gebreyesus MS et al., Population pharmacokinetics of esomepra…, British journal of clinical… (2022) | [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nagase_2020](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Chung_2022](drugs/drug_esomeprazole/pd_Chung_2022_pH.md) | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu D et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.733](https://doi.org/10.1002/jcph.733) | [26970404](https://pubmed.ncbi.nlm.nih.gov/26970404) | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Nagase_2020.pdf` | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) | [32227647](https://pubmed.ncbi.nlm.nih.gov/32227647) | The paper explicitly develops and reports quantitative population pharmacokinetic parameters (clearance, volume of distribution, absorption transit constants, and variability) for esomeprazole in humans using NONMEM. |
| `Earp_2017.pdf` | Earp JC et al., Esomeprazole FDA Approval in Children W…, Journal of pediatric gastro… (2017) | popPK | 9 | [10.1097/MPG.0000000000001467](https://doi.org/10.1097/MPG.0000000000001467) | [27875488](https://pubmed.ncbi.nlm.nih.gov/27875488) | The paper describes a population PK study for esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-10T14:50:35.840475+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2001 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (acid inhibition) and qualitative PK trends (AUC increase) but lacks quantitative disposition parameters (CL, V, ka) or compartmental model values for esomeprazole. |
| popPK | Boinpally_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of atogepant, with esomeprazole serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for esomeprazole are reported. |
| popPK | Chung_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of YH4808, with esomeprazole serving only as a comparator for pharmacodynamic effects (intragastric pH), and no PK parameters for esomeprazole are reported. |
| popPK | Earp_2017 | relevant | 9 | 0 | The paper describes a population PK study for esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Earp_2017 | not_relevant | 3 | 1 | The paper describes exposure-matching and qualitative similarity of exposure-response relationships but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Kirchheiner_2009_2 | irrelevant | not captured | not captured | The paper is a pharmacodynamic meta-analysis modeling dose-response effects on intragastric pH and contains no quantitative pharmacokinetic parameters for esomeprazole. |
| popPK | Lacy_2017_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cabozantinib, and esomeprazole is only mentioned as a co-administered agent that did not affect cabozantinib exposure. |
| popPK | Lee_2025 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for esomeprazole, but lacks the specific compartmental/population parameters (CL, V, Q, ka) required for high relevance, and key numeric values for Cmax and t1/2 are likely in tables not fully provided in the evidence. |
| popPK | Litalien_2005 | irrelevant | not captured | not captured | The review explicitly states that no pharmacokinetic data are available for esomeprazole in children and contains no quantitative PK parameters for this drug. |
| popPK | Liu_2016 | relevant | 10 | 0 | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Schlachter_2026 | irrelevant | not captured | not captured | The paper exclusively reports population pharmacokinetic parameters for atogepant, with esomeprazole only mentioned as a concomitant medication. |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The study focuses on clopidogrel pharmacokinetics and pharmacodynamics, with esomeprazole serving only as a co-administered comparator agent rather than the subject drug. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, with esomeprazole serving only as a co-administered drug affecting tacrolimus bioavailability. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_esomeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
