<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;organic nitrates in combination&quot;}]"></div>

# organic nitrates in combination

- **generic name:** organic nitrates in combination
- **ATC codes:** `C01DA20`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Organic nitrates in combination are vasodilators used in cardiac therapy, for example to treat heart-related conditions such as angina. They are grouped under the cardiovascular system class and remain an established option in cardiac care.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:09 | 2:37 | 0/0/0 | 0/0/0 | 0/0/0 | 66,127/4,805 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 43 returned
- **screened:** 11  ·  **relevant:** 9
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chasseaud_1983.pdf` | Chasseaud LF, Newer aspects of the pharmacokinetics o…, Zeitschrift fur Kardiologie… (1983) | popPK | 10 | not captured | [6666223](https://pubmed.ncbi.nlm.nih.gov/6666223) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume, half-life) for isosorbide dinitrate and its metabolite isosorbide-5-mononitrate in humans. |
| `Major_1984.pdf` | Major RM et al., Isosorbide 5-mononitrate kinetics, Clinical pharmacology and t… (1984) | popPK | 10 | [10.1038/clpt.1984.90](https://doi.org/10.1038/clpt.1984.90) | [6713775](https://pubmed.ncbi.nlm.nih.gov/6713775) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life, absorption) for isosorbide 5-mononitrate, which is an organic nitrate. |
| `Chen_2004.pdf` | Chen J et al., Pharmacokinetics of three organic nitra…, Arzneimittel-Forschung (2004) | popPK | 9 | [10.1055/s-0031-1296960](https://doi.org/10.1055/s-0031-1296960) | [15146932](https://pubmed.ncbi.nlm.nih.gov/15146932) | The study reports quantitative pharmacokinetic parameters (AUC, bioavailability) for organic nitrates (ISDN, 5-ISMN) in humans, with specific numeric values provided in the abstract. |
| `Fung_1988.pdf` | Fung HL et al., Interpretation of nitrate plasma concen…, European heart journal 9 Su… (1988) | popPK | 9 | [10.1093/eurheartj/9.suppl_a.39](https://doi.org/10.1093/eurheartj/9.suppl_a.39) | [3137071](https://pubmed.ncbi.nlm.nih.gov/3137071) | The study reports quantitative pharmacokinetic parameters (clearance) for nitroglycerin in rats, but specific numeric values for clearance are not explicitly listed in the text, only correlations and relative estimates. |
| `Hatanaka_2001.pdf` | Hatanaka T et al., Stereoselective pharmacokinetics and ph…, The Journal of pharmacology… (2001) | popPK | 9 | not captured | [11408561](https://pubmed.ncbi.nlm.nih.gov/11408561) | The study reports quantitative PK parameters (clearance, volume) for organic nitrates in rats, but the specific numeric values are not present in the provided abstract text. |
| `McNiff_1981.pdf` | McNiff EF et al., Nitroglycerin pharmacokinetics after in…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600700923](https://doi.org/10.1002/jps.2600700923) | [6101155](https://pubmed.ncbi.nlm.nih.gov/6101155) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for nitroglycerin, an organic nitrate, in human subjects. |
| `Platzer_1982.pdf` | Platzer R et al., Pharmacokinetics of intravenous isosorb…, Journal of pharmacokinetics… (1982) | popPK | 9 | [10.1007/BF01062541](https://doi.org/10.1007/BF01062541) | [7182455](https://pubmed.ncbi.nlm.nih.gov/7182455) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, bioavailability) for isosorbide dinitrate, which is a member of the organic nitrates class, in human subjects. |
| `Pressmar_1992.pdf` | Pressmar F et al., Biotransformation and pharmacokinetics…, Arzneimittel-Forschung (1992) | popPK | 9 | not captured | [1492842](https://pubmed.ncbi.nlm.nih.gov/1492842) | The study reports pharmacokinetic parameters (bioavailability, protein binding, half-life) for an organic nitrate in dogs, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Yap_1978.pdf` | Yap PS et al., Pharmacokinetics of nitroglycerin in ra…, Journal of pharmaceutical s… (1978) | popPK | 9 | [10.1002/jps.2600670446](https://doi.org/10.1002/jps.2600670446) | [417170](https://pubmed.ncbi.nlm.nih.gov/417170) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, bioavailability) for nitroglycerin in rats. |
| `Zell_1994.pdf` | Zell C et al., Pharmacokinetics of the organic nitrate…, Arzneimittel-Forschung (1994) | popPK | 9 | not captured | [7848329](https://pubmed.ncbi.nlm.nih.gov/7848329) | The study reports quantitative pharmacokinetic parameters (half-life, bioavailability) for organic nitrates in dogs and humans, with specific numeric values provided in the abstract. |
| `Armstrong_1979.pdf` | Armstrong PW et al., Blood levels after sublingual nitroglyc…, Circulation (1979) | popPK | 8 | [10.1161/01.cir.59.3.585](https://doi.org/10.1161/01.cir.59.3.585) | [104803](https://pubmed.ncbi.nlm.nih.gov/104803) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for nitroglycerin (a member of the organic nitrates class) in humans, though specific CL and V values are not explicitly listed as numbers. |
| `Blei_1984.pdf` | Blei AT et al., Role of the liver in the disposition of…, Biochemical pharmacology (1984) | popPK | 8 | [10.1016/0006-2952(84)90645-2](https://doi.org/10.1016/0006-2952(84)90645-2) | [6431989](https://pubmed.ncbi.nlm.nih.gov/6431989) | The study reports quantitative systemic clearance (Cls) values for nitroglycerin (an organic nitrate) in rats, providing specific numeric data for disposition parameters. |
| `Fung_1986.pdf` | Fung HL et al., Cardiac output is an apparent determina…, The Journal of pharmacology… (1986) | popPK | 8 | not captured | [3098960](https://pubmed.ncbi.nlm.nih.gov/3098960) | The study reports quantitative PK parameters (clearance) for nitroglycerin in rats, but specific numeric values are limited to correlations and relative estimates (e.g., 3/4 of cardiac output) rather than absolute units. |

<sub>queue written 2026-10-06T11:09:19.326442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abshagen_1992 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for isosorbide mononitrate, which is a specific organic nitrate, but the target drug is "organic_nitrates_in_combination" (implying a combination therapy or specific formulation not described here), and the evidence does not support the specific combination entity. |
| popPK | Bogaert_1983 | irrelevant | 2 | 0 | The paper is a review that discusses general pharmacokinetic properties and qualitative trends (e.g., "high clearance") but does not report specific quantitative parameter values (CL, V, Q, ka) for the drug combination. |
| popPK | Bogaert_1988 | irrelevant | 2 | 0 | The paper is a qualitative review/overview of organic nitrates pharmacokinetics and does not report specific quantitative parameter values (CL, V, t1/2) in the provided text. |
| popPK | Bogaert_1994 | irrelevant | 2 | 0 | The paper is a review discussing the pharmacokinetics of organic nitrates generally, but it does not report specific quantitative disposition parameters (CL, V, Q, ka) for the specific combination drug "organic_nitrates_in_combination" nor does it provide extractable numeric values for the individual agents in a model context. |
| popPK | Cawello_1983 | irrelevant | 0 | 0 | The study measures drug loss due to adsorption in PVC tubing (in vitro/device interaction) and does not report pharmacokinetic parameters (CL, V, etc.) for the drug in a biological system. |
| popPK | Chekman_2002 | irrelevant | 2 | 0 | The paper is a review/summary of literature and clinical properties without reporting original quantitative PK parameter values for the specific combination drug. |
| popPK | Chu_1984 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters (clearance ratio, AUC) for nitroglycerin, which is a single agent, not the specific combination drug "organic_nitrates_in_combination" requested. |
| popPK | Daiber_2010 | irrelevant | 0 | 0 | The paper focuses on the mechanistic antioxidant properties and HO-1 induction of PETN, not on quantitative pharmacokinetic parameters. |
| popPK | Fung_1984 | irrelevant | 2 | 0 | The study focuses on tissue uptake and metabolism mechanisms in rats rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, ka) for the drug combination. |
| popPK | Fung_1985 | irrelevant | 2 | 0 | The text is a narrative review discussing general pharmacokinetic concepts and qualitative findings (bioavailability percentages) without reporting specific quantitative disposition parameters (CL, V, ka) or a compartmental model for the drug. |
| popPK | Fung_1986 | relevant | 8 | 3 | The study reports quantitative PK parameters (clearance) for nitroglycerin in rats, but specific numeric values are limited to correlations and relative estimates (e.g., 3/4 of cardiac output) rather than absolute units. |
| popPK | Fung_1987 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic concepts and mechanisms without reporting specific quantitative parameter values (CL, V, etc.) for the subject drug. |
| popPK | Fung_1988 | relevant | 9 | 2 | The study reports quantitative pharmacokinetic parameters (clearance) for nitroglycerin in rats, but specific numeric values for clearance are not explicitly listed in the text, only correlations and relative estimates. |
| popPK | Fung_1992 | irrelevant | 0 | 0 | The paper is a review discussing general mechanisms and qualitative differences in pharmacokinetics without reporting specific quantitative disposition parameters for a specific organic nitrate. |
| popPK | Fung_1993 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of action and tolerance of organic nitrates without reporting any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Goldenberg_1998 | irrelevant | 0 | 0 | The paper focuses on sildenafil citrate, and organic nitrates are only mentioned as a contraindicated concomitant medication, not as the subject of pharmacokinetic analysis. |
| popPK | Hatanaka_2001 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, volume) for organic nitrates in rats, but the specific numeric values are not present in the provided abstract text. |
| popPK | Jacob_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tadalafil (a PDE5 inhibitor), not organic nitrates. |
| popPK | Kamp_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketamine and its metabolites, not organic nitrates. |
| popPK | Kielbasa_2000 | irrelevant | 1 | 1 | The study focuses on isobutyl nitrite (a nitrite), not organic nitrates, and reports PK/PD data for a different chemical class. |
| popPK | Leftheriotis_1991 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (blood flow and resistance) of nitroglycerin and sodium nitroprusside, not pharmacokinetic parameters (CL, V, ka) for organic nitrates. |
| popPK | Lemmer_1996 | irrelevant | 0 | 0 | The paper is a review discussing the clinical relevance of chronopharmacology and mentions organic nitrates only as a class of cardiovascular drugs without providing specific quantitative PK parameters for a specific combination or study. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a polysaccharide (TSCP-4) from a traditional Chinese medicine formula, not organic nitrates. |
| popPK | Merkel_1990 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of indocyanine green (ICG) as a probe for liver function, not the pharmacokinetic parameters of the subject drug organic nitrates (isosorbide dinitrate). |
| popPK | Parker_1985 | irrelevant | 0 | 0 | The paper discusses nitrate tolerance and hemodynamic effects but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for organic nitrates. |
| popPK | Pressmar_1992 | relevant | 9 | 4 | The study reports pharmacokinetic parameters (bioavailability, protein binding, half-life) for an organic nitrate in dogs, but specific clearance and volume values are not explicitly listed in the provided text. |
| popPK | Rinehart_2023 | irrelevant | 2 | 1 | The study models the hemodynamic effects of sodium nitroprusside (a nitrate) in pigs but does not report standard pharmacokinetic disposition parameters (CL, V, ka) for the drug itself, focusing instead on physiological response modeling. |
| popPK | Schuehly_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sacubitril/valsartan, while nitroglycerin (an organic nitrate) is used as a co-administered agent to assess pharmacodynamic interactions, and no PK parameters for nitroglycerin are reported. |
| popPK | Shaw_1984 | irrelevant | 2 | 0 | The study focuses on nitroglycerin and clonidine as separate agents, not a specific combination product, and the provided text lacks quantitative PK parameters (CL, V, etc.) for the combination. |
| popPK | Thadani_1988 | irrelevant | 2 | 0 | The text is a qualitative review discussing the complexity of nitrate pharmacokinetics and tolerance without reporting specific quantitative disposition parameters (CL, V, ka) for a combination product. |
| popPK | Tzeng_1992 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling and the relationship between half-life and duration of action in rats, but does not report specific quantitative PK parameters (CL, V, Q, ka) for the drug itself in the provided text. |
| popPK | Wu_2025 | irrelevant | 2 | 8 | The study reports non-compartmental bioequivalence parameters (Cmax, AUC, t1/2) for isosorbide mononitrate, but lacks the specific compartmental or population-PK parameters (CL, V, Q, ka) required for the target drug class "organic_nitrates_in_combination". |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | The study investigates the molecular mechanism of nitrate tolerance (S-nitrosylation) and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for organic nitrates. |
| popPK | de_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxocobalamin, not organic nitrates. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
