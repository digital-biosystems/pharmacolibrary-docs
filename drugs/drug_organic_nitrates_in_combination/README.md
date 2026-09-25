<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;organic nitrates in combination&quot;}]"></div>

# organic nitrates in combination

- **generic name:** organic nitrates in combination
- **ATC codes:** `C01DA20`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 21:36 | 16:33 | 0/0/0 | 0/0/0 | 0/0/0 | 121,358/6,441 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 43 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Major_1984.pdf` | Major RM et al., Isosorbide 5-mononitrate kinetics, Clinical pharmacology and t… (1984) | popPK | 10 | [10.1038/clpt.1984.90](https://doi.org/10.1038/clpt.1984.90) | [6713775](https://pubmed.ncbi.nlm.nih.gov/6713775) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life, absorption rate) for isosorbide 5-mononitrate, which is an organic nitrate, with all numeric values explicitly present in the text. |
| `Abshagen_1992.pdf` | Abshagen UW, Pharmacokinetics of isosorbide mononitr…, The American journal of car… (1992) | popPK | 9 | [10.1016/0002-9149(92)90028-w](https://doi.org/10.1016/0002-9149(92)90028-w) | [1449102](https://pubmed.ncbi.nlm.nih.gov/1449102) | The text provides explicit quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for isosorbide mononitrate, which is a member of the organic nitrates class. |
| `Chasseaud_1983.pdf` | Chasseaud LF, Newer aspects of the pharmacokinetics o…, Zeitschrift fur Kardiologie… (1983) | popPK | 9 | not captured | [6666223](https://pubmed.ncbi.nlm.nih.gov/6666223) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume, half-life) for isosorbide-5-mononitrate, a key component of organic nitrates, in humans. |
| `Chen_2004.pdf` | Chen J et al., Pharmacokinetics of three organic nitra…, Arzneimittel-Forschung (2004) | popPK | 9 | [10.1055/s-0031-1296960](https://doi.org/10.1055/s-0031-1296960) | [15146932](https://pubmed.ncbi.nlm.nih.gov/15146932) | The study reports quantitative pharmacokinetic parameters (AUC, bioavailability) for organic nitrates (ISDN and 5-ISMN) in humans, with specific numeric values provided in the text. |
| `Hatanaka_2001.pdf` | Hatanaka T et al., Stereoselective pharmacokinetics and ph…, The Journal of pharmacology… (2001) | popPK | 9 | not captured | [11408561](https://pubmed.ncbi.nlm.nih.gov/11408561) | The paper reports quantitative PK parameters (clearance, volume) for organic nitrates in rats, but the specific numeric values are not present in the provided evidence text. |
| `McNiff_1981.pdf` | McNiff EF et al., Nitroglycerin pharmacokinetics after in…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600700923](https://doi.org/10.1002/jps.2600700923) | [6101155](https://pubmed.ncbi.nlm.nih.gov/6101155) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for nitroglycerin, which is an organic nitrate, in human subjects. |
| `Pressmar_1992.pdf` | Pressmar F et al., Biotransformation and pharmacokinetics…, Arzneimittel-Forschung (1992) | popPK | 9 | not captured | [1492842](https://pubmed.ncbi.nlm.nih.gov/1492842) | The study reports quantitative pharmacokinetic parameters (bioavailability, protein binding, half-life) for an organic nitrate in dogs, with values explicitly stated in the text. |
| `Fung_1988.pdf` | Fung HL et al., Interpretation of nitrate plasma concen…, European heart journal 9 Su… (1988) | popPK | 8 | [10.1093/eurheartj/9.suppl_a.39](https://doi.org/10.1093/eurheartj/9.suppl_a.39) | [3137071](https://pubmed.ncbi.nlm.nih.gov/3137071) | The study reports quantitative PK parameters (clearance) for nitroglycerin in rats, but specific numeric values are not provided in the text, only correlations and relative estimates. |

<sub>queue written 2026-09-20T21:36:42.295484+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Armstrong_1979 | irrelevant | 2 | 0 | The study focuses on nitroglycerin (a single organic nitrate) rather than the specific combination drug class requested, and it reports only descriptive pharmacokinetic observations (peak concentration, time to peak) without quantitative compartmental parameters like clearance or volume of distribution. |
| popPK | Blei_1984 | irrelevant | 2 | 2 | The study focuses on nitroglycerin (a single organic nitrate) rather than the specific combination drug class, and reports only systemic clearance without a full compartmental or population PK model. |
| popPK | Bogaert_1983 | irrelevant | 2 | 1 | The paper is a review that discusses general pharmacokinetic properties of organic nitrates without providing specific quantitative parameter values (CL, V, Q, ka) for the specific combination drug in question. |
| popPK | Bogaert_1988 | irrelevant | 1 | 0 | The paper is a qualitative review/overview of organic nitrates pharmacokinetics and does not report specific quantitative disposition parameters (CL, V, etc.) for the subject drug. |
| popPK | Bogaert_1994 | irrelevant | 2 | 0 | The paper is a review discussing the general pharmacokinetics of organic nitrates without reporting specific quantitative disposition parameters (CL, V, Q, ka) for the specific combination drug "organic_nitrates_in_combination". |
| popPK | Cawello_1983 | irrelevant | 0 | 0 | The study focuses on drug loss due to tubing material (PVC vs PE) and explicitly states that pharmacokinetic assessment becomes invalid, reporting no quantitative PK parameters for the drug. |
| popPK | Chekman_2002 | irrelevant | 2 | 0 | The paper is a review/summary of literature and clinical properties without reporting original quantitative PK parameter values for the specific combination drug. |
| popPK | Chu_1984 | irrelevant | 2 | 1 | The study focuses on nitroglycerin (a single agent) rather than the specific combination drug 'organic_nitrates_in_combination', and only reports bioavailability metrics (AUC, clearance ratio) without full compartmental PK parameters (V, Q, ka). |
| popPK | Daiber_2010 | irrelevant | 0 | 0 | The paper focuses on the mechanistic antioxidant properties (HO-1 induction) of PETN and does not report quantitative pharmacokinetic parameters. |
| popPK | Fung_1984 | irrelevant | 2 | 0 | The study focuses on tissue uptake and metabolism mechanisms in rats rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for the drug combination. |
| popPK | Fung_1985 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic concepts and bioavailability percentages for isosorbide dinitrate, but it does not report specific quantitative disposition parameters (CL, V, ka) or a compartmental model for the specific combination drug. |
| popPK | Fung_1986 | irrelevant | 2 | 0 | The study investigates nitroglycerin (a single organic nitrate) in rats, not the specific combination drug "organic_nitrates_in_combination," and reports no quantitative PK parameter values (only correlations and qualitative descriptions). |
| popPK | Fung_1987 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic concepts of organic nitrates without reporting specific quantitative parameter values for the subject drug. |
| popPK | Fung_1988 | relevant | 8 | 2 | The study reports quantitative PK parameters (clearance) for nitroglycerin in rats, but specific numeric values are not provided in the text, only correlations and relative estimates. |
| popPK | Fung_1992 | irrelevant | 0 | 0 | The paper is a review discussing general mechanisms and qualitative differences in organic nitrates without reporting specific quantitative pharmacokinetic parameters for a specific combination drug. |
| popPK | Fung_1993 | irrelevant | 0 | 0 | The text is a general review of the pharmacology of organic nitrates without reporting specific quantitative pharmacokinetic parameters for a combination drug. |
| popPK | Goldenberg_1998 | irrelevant | 0 | 0 | The paper focuses on sildenafil citrate and only mentions organic nitrates as a contraindication, providing no pharmacokinetic parameters for organic nitrates. |
| popPK | Hatanaka_2001 | relevant | 9 | 0 | The paper reports quantitative PK parameters (clearance, volume) for organic nitrates in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Jacob_2025 | irrelevant | 0 | 0 | The study focuses on tadalafil (a PDE5 inhibitor), not organic nitrates, and reports PK parameters for tadalafil only. |
| popPK | Kamp_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketamine and its metabolites, not organic nitrates. |
| popPK | Kielbasa_2000 | irrelevant | 2 | 0 | The study focuses on isobutyl nitrite (a nitrite), not organic nitrates, and reports only concentration-response data without specific PK parameters like clearance or volume. |
| popPK | Leftheriotis_1991 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (blood flow and resistance) of nitroglycerin and sodium nitroprusside, not pharmacokinetic parameters (CL, V, ka) for organic nitrates. |
| popPK | Lemmer_1996 | irrelevant | 0 | 0 | The paper is a review discussing chronopharmacology generally and does not report original quantitative pharmacokinetic parameters for organic nitrates. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a polysaccharide (TSCP-4) from a traditional Chinese medicine formula, not organic nitrates. |
| popPK | Merkel_1990 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of indocyanine green (ICG) as a probe drug to assess liver function, while isosorbide dinitrate is only a co-administered agent, not the subject of PK parameter estimation. |
| popPK | Parker_1985 | irrelevant | 0 | 0 | The paper is a review of nitrate tolerance and clinical management strategies, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for organic nitrates. |
| popPK | Platzer_1982 | irrelevant | 2 | 2 | The study focuses on isosorbide dinitrate (ISDN) as the subject drug, not organic nitrates in combination, and reports PK parameters for ISDN only. |
| popPK | Rinehart_2023 | irrelevant | 2 | 1 | The study models the hemodynamic effects of sodium nitroprusside (a nitrate) but does not report standard pharmacokinetic parameters (CL, V, ka) for organic nitrates in combination, focusing instead on physiological response modeling. |
| popPK | Schuehly_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic interaction of nitroglycerin with sacubitril/valsartan and explicitly states it did not impact the pharmacokinetics of sacubitril/valsartan, without reporting quantitative PK parameters for the organic nitrate. |
| popPK | Shaw_1984 | irrelevant | 2 | 0 | The study focuses on nitroglycerin and clonidine individually, not a specific combination product, and the evidence contains no quantitative PK parameters (CL, V, ka) for the subject drug. |
| popPK | Thadani_1988 | irrelevant | 2 | 0 | The text is a qualitative review discussing the general pharmacokinetic properties of organic nitrates without reporting specific quantitative disposition parameters (CL, V, ka) for the subject drug. |
| popPK | Tzeng_1992 | irrelevant | 2 | 0 | The study focuses on organic mononitrates (not the specific combination drug) in rats and reports pharmacodynamic parameters (EC50, half-lives of NO/cGMP) rather than quantitative PK disposition parameters (CL, V) for the subject drug. |
| popPK | Wu_2025 | irrelevant | 2 | 4 | The study reports non-compartmental bioequivalence parameters (Cmax, AUC, t1/2) for isosorbide mononitrate, but lacks the specific compartmental or population-PK parameters (CL, V, Q, ka) required for the target drug class. |
| popPK | Yap_1978 | irrelevant | 2 | 2 | The study focuses on nitroglycerin alone in rats, not the specific combination drug "organic_nitrates_in_combination" as the subject. |
| popPK | Zell_1994 | irrelevant | 2 | 2 | The study examines specific organic nitrate compounds (BM 12.1247 and BM 12.1307) rather than the general class "organic_nitrates_in_combination," and lacks the specific quantitative disposition parameters (CL, V, Q) required for the target drug entity. |
| popPK | Zhou_2019 | irrelevant | 0 | 0 | The study focuses on the mechanistic basis of nitrate tolerance (S-nitrosylation) and does not report quantitative pharmacokinetic parameters for organic nitrates. |
| popPK | de_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydroxocobalamin, not organic nitrates. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
