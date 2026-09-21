<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;esomeprazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Esomeprazole_Chung2022_reference&quot;,&quot;label&quot;:&quot;Chung_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Esomeprazole_Nagase2020_reference&quot;,&quot;label&quot;:&quot;Nagase_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Esomeprazole_Gebreyesus2022_reference&quot;,&quot;label&quot;:&quot;Gebreyesus_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-09-18 04:42 | 9:54 | 1/1/1 | 0/1/0 | 0/0/0 | 199,229/23,593 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 4/3 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Chung_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Chung2022_reference.md) | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Nagase_2020_reference](drugs/drug_esomeprazole/Esomeprazole_Nagase2020_reference.md) | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Gebreyesus_2022_reference](drugs/drug_esomeprazole/Esomeprazole_Gebreyesus2022_reference.md) | Gebreyesus MS et al., Population pharmacokinetics of esomepra…, British journal of clinical… (2022) | [10.1111/bcp.15416](https://doi.org/10.1111/bcp.15416) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Chung_2022](drugs/drug_esomeprazole/pd_Chung_2022_pH.md) | Chung TK et al., A population PK-PD model of YH4808, a n…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=esomeprazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>“…ls of the S- than of the R-isomer.[FDA Label] Nine major urinary metabolites have been det…”</sub> | prose |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| metabolism | stomach | <sub>“…le. The major metabolites of esomeprazole have no effect on gastric acid secretion.[F4495]…”</sub> | prose |
| excretion | bile duct | <sub>“…, and the remainder is found as inactive metabolites in the feces.…”</sub> | prose |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4B (modulator), DDAH1 (unknown).</sub>

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu D et al., Pharmacokinetic and Pharmacodynamic Mod…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.733](https://doi.org/10.1002/jcph.733) | [26970404](https://pubmed.ncbi.nlm.nih.gov/26970404) | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Nagase_2020.pdf` | Nagase M et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1111/jcpt.13129](https://doi.org/10.1111/jcpt.13129) | [32227647](https://pubmed.ncbi.nlm.nih.gov/32227647) | The paper is a population PK study of esomeprazole and provides specific numeric values for apparent clearance (CL) for different CYP2C19 phenotypes in the text. |
| `Earp_2017.pdf` | Earp JC et al., Esomeprazole FDA Approval in Children W…, Journal of pediatric gastro… (2017) | popPK | 9 | [10.1097/MPG.0000000000001467](https://doi.org/10.1097/MPG.0000000000001467) | [27875488](https://pubmed.ncbi.nlm.nih.gov/27875488) | The paper describes a population PK study for esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-18T04:34:35.851576+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2001 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (acid inhibition) and qualitative PK trends (AUC increase) but lacks quantitative disposition parameters (CL, V, ka) or a compartmental model for esomeprazole. |
| popPK | Boinpally_2023 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of atogepant, with esomeprazole serving only as a co-administered agent to test for interactions, and no quantitative PK parameters for esomeprazole are reported. |
| popPK | Chung_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of YH4808, with esomeprazole serving only as a comparator for pharmacodynamic effects (time at pH &gt; 4) without reporting PK parameters for esomeprazole. |
| popPK | Earp_2017 | relevant | 9 | 0 | The paper describes a population PK study for esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Earp_2017 | not_relevant | 3 | 1 | The paper describes exposure-matching and qualitative similarity of exposure-response relationships but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| popPK | Kirchheiner_2009_2 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on gastric pH and dose equivalence, not a pharmacokinetic study reporting disposition parameters like clearance or volume for esomeprazole. |
| popPK | Lacy_2017_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cabozantinib, and esomeprazole is only mentioned as a co-administered agent that did not affect cabozantinib exposure. |
| popPK | Lee_2025 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax, t1/2) for esomeprazole, but lacks the specific compartmental/population parameters (CL, V, Q, ka) required for high relevance, and key numeric values for Cmax and t1/2 are likely in tables not fully provided in the evidence. |
| popPK | Litalien_2005 | irrelevant | 0 | 0 | The paper is a review that explicitly states no pharmacokinetic data are available for esomeprazole in children, and it does not report any quantitative parameters for esomeprazole. |
| popPK | Liu_2016 | relevant | 10 | 0 | The paper describes a population PK study of esomeprazole, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atogepant, not esomeprazole, which is only mentioned as a concomitant medication. |
| popPK | Simon_2015 | irrelevant | 0 | 0 | The study focuses on clopidogrel pharmacokinetics and pharmacodynamics, with esomeprazole serving only as a co-administered comparator agent rather than the subject drug. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, with esomeprazole serving only as a co-administered drug affecting tacrolimus bioavailability. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_esomeprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
