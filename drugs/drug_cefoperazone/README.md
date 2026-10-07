<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefoperazone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefoperazone_Soback1989_reference&quot;,&quot;label&quot;:&quot;Soback_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefoperazone/Cefoperazone_Soback1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefoperazone_Zhou2022_reference&quot;,&quot;label&quot;:&quot;Zhou_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefoperazone/Cefoperazone_Zhou2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefoperazone

- **generic name:** cefoperazone
- **ATC codes:** `J01DD12`
- **DrugBank:** [DB01329](https://go.drugbank.com/drugs/DB01329) · **PubChem:** [CID 44185](https://pubchem.ncbi.nlm.nih.gov/compound/44185)
- **molar mass:** 645.67 g/mol (C25H27N9O8S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Cefoperazone is a third-generation cephalosporin antibiotic used to treat bacterial infections, including urinary, respiratory, and Pseudomonas infections. It has been withdrawn from the market in many places and is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2325775](https://www.wikidata.org/wiki/Q2325775) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefoperazone | parent | 645.67 | C25H27N9O8S2 | DrugBank | [44185](https://pubchem.ncbi.nlm.nih.gov/compound/44185) | Ji_2022, Kemmerich_1983, Ripa_1986, Soback_1989, Zheng_2014, Zhou_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:25 | 9:43 | 2/0/4 | 2/0/0 | 0/0/0 | 373,364/24,330 | einfracz / qwen3.8-27b | 11 | 2/4 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Soback_1989_reference](drugs/drug_cefoperazone/Cefoperazone_Soback1989_reference.md) | ▶ model + simulator | 1-compartment, IV | 6 | Soback S et al., Pharmacokinetics of single doses of cef…, Research in veterinary scie… (1989) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhou_2022_reference](drugs/drug_cefoperazone/Cefoperazone_Zhou2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Zhou Y et al., Combined PK/PD Index May Be a More Appr…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11050703](https://doi.org/10.3390/antibiotics11050703) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Ji_2022_reference](drugs/drug_cefoperazone/Cefoperazone_Ji2022_reference.md) | — | 1-compartment (no model) | 3 | Ji XW et al., Model-Informed Drug Development of New…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.856792](https://doi.org/10.3389/fphar.2022.856792) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Kemmerich_1983_reference](drugs/drug_cefoperazone/Cefoperazone_Kemmerich1983_reference.md) | — | parent + metabolite (no model) | 8 | Kemmerich B et al., Comparative pharmacokinetics of cefoper…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.3.429](https://doi.org/10.1128/AAC.23.3.429) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Ripa_1986_reference](drugs/drug_cefoperazone/Cefoperazone_Ripa1986_reference.md) | — | 1-compartment (no model) | 5 | Ripa S et al., Pharmacokinetics of cefoperazone after…, International journal of cl… (1986) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Zheng_2014_reference](drugs/drug_cefoperazone/Cefoperazone_Zheng2014_reference.md) | — | 1-compartment (no model) | 4 | Zheng J et al., [Experimental study on concentrations a…, Zhonghua wai ke za zhi [Chi… (2014) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhu_2020_MIC](drugs/drug_cefoperazone/pd_Zhu_2020_MIC.md) | MIC biomarker turnover ← cefoperazone/sulbactam | — | Zhu W et al., Pharmacokinetic and pharmacodynamic pro…, Microbial pathogenesis (2020) | [10.1016/j.micpath.2019.103809](https://doi.org/10.1016/j.micpath.2019.103809) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [van_1990_antibacterial_effect](drugs/drug_cefoperazone/pd_van_1990_antibacterial_effect.md) | antibacterial effect ← cefoperazone · direct Emax (saturable) effect | — | van Ogtrop ML et al., Comparative study of the effects of fou…, Antimicrobial agents and ch… (1990) | [10.1128/AAC.34.10.1932](https://doi.org/10.1128/AAC.34.10.1932) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefoperazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 67 returned
- **screened:** 12  ·  **relevant:** 12
- **records:** 6  ·  extracted 2  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Danziger_1994.pdf` | Danziger LH et al., Steady-state pharmacokinetics of cefope…, The Annals of pharmacothera… (1994) | popPK | 10 | [10.1177/106002809402800602](https://doi.org/10.1177/106002809402800602) | [7919553](https://pubmed.ncbi.nlm.nih.gov/7919553) | The abstract explicitly reports quantitative steady-state pharmacokinetic parameters (Vssd, t1/2, Cl, AUC) for cefoperazone in patients. |
| `Eandi_1982.pdf` | Eandi M et al., Pharmacokinetics of some cephalosporins…, Methods and findings in exp… (1982) | popPK | 10 | not captured | [7121129](https://pubmed.ncbi.nlm.nih.gov/7121129) | The study is relevant as it reports pharmacokinetic parameters for cefoperazone in rabbits, but no specific numeric values are provided in the extracted evidence. |
| `Gao_2016.pdf` | Gao C et al., Pharmacokinetics of cefoperazone/sulbac…, European journal of clinica… (2016) | popPK | 10 | [10.1007/s00228-016-2045-x](https://doi.org/10.1007/s00228-016-2045-x) | [27023465](https://pubmed.ncbi.nlm.nih.gov/27023465) | The abstract explicitly reports quantitative pharmacokinetic parameters (Vss and CLt) for cefoperazone in critically ill patients. |
| `Kakiuchi_1985.pdf` | Kakiuchi S et al., [Pharmacokinetics of cefoperazone in li…, The Japanese journal of ant… (1985) | popPK | 10 | not captured | [4078997](https://pubmed.ncbi.nlm.nih.gov/4078997) | The study reports quantitative PK parameters (Cl, T1/2, K10) for cefoperazone in humans, but specific numeric values are not present in the provided abstract; they are likely in the full text or tables which are not included here. |
| `Onita_2025.pdf` | Onita T et al., Population Pharmacokinetic Analysis of…, The Pediatric infectious di… (2025) | popPK | 10 | [10.1097/INF.0000000000004832](https://doi.org/10.1097/INF.0000000000004832) | [40233330](https://pubmed.ncbi.nlm.nih.gov/40233330) | The paper describes a population PK model for cefoperazone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence. |
| `Ripa_1986.pdf` | Ripa S et al., Pharmacokinetics of cefoperazone after…, International journal of cl… (1986) | popPK | 10 | not captured | [3721648](https://pubmed.ncbi.nlm.nih.gov/3721648) | The study reports quantitative pharmacokinetic parameters (half-life, Cmax, bioavailability, compartment model) for cefoperazone in humans directly in the abstract. |
| `Saudek_1986.pdf` | Saudek F et al., Pharmacokinetics of cefoperazone in hea…, Czechoslovak medicine (1986) | popPK | 10 | not captured | [3095076](https://pubmed.ncbi.nlm.nih.gov/3095076) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for cefoperazone in humans with all numeric values clearly stated in the evidence. |
| `Shi_2020.pdf` | Shi HY et al., Developmental population pharmacokineti…, The Journal of antimicrobia… (2020) | popPK | 10 | [10.1093/jac/dkaa071](https://doi.org/10.1093/jac/dkaa071) | [32129861](https://pubmed.ncbi.nlm.nih.gov/32129861) | The study is a population PK model of cefoperazone in children, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract or text. |
| `Soback_1989.pdf` | Soback S et al., Pharmacokinetics of single doses of cef…, Research in veterinary scie… (1989) | popPK | 10 | not captured | [2799072](https://pubmed.ncbi.nlm.nih.gov/2799072) | The study provides quantitative PK parameters (CL, Vss, t1/2, MRT, F) for cefoperazone in calves, with values explicitly listed in the abstract. |
| `Spyker_1985.pdf` | Spyker DA et al., Pharmacokinetics of multiple-dose cefop…, American journal of nephrol… (1985) | popPK | 10 | [10.1159/000166962](https://doi.org/10.1159/000166962) | [4061504](https://pubmed.ncbi.nlm.nih.gov/4061504) | The abstract provides explicit numeric values for half-life, elimination rate constants, clearance, and volume of distribution for cefoperazone in hemodialysis patients. |
| `Fourtillan_1983.pdf` | Fourtillan JB et al., [Comparative pharmacokinetics of moxala…, La semaine des hopitaux : o… (1983) | popPK | 9 | not captured | [6310788](https://pubmed.ncbi.nlm.nih.gov/6310788) | The paper reports PK parameters for cefoperazone in a comparative study, but specific numeric values for cefoperazone are contained in Tables I and III which are not fully provided in the text evidence. |
| `Jendroschek_1981.pdf` | Jendroschek T et al., [Cefoperazone--a new cephalosporin anti…, Medizinische Klinik (1981) | popPK | 9 | not captured | [6452567](https://pubmed.ncbi.nlm.nih.gov/6452567) | The paper describes a PK study of cefoperazone in humans using a 3-compartment model, but the abstract/evidence provided does not contain the specific numeric parameter values (CL, V, half-life, etc.). |
| `Li_2022.pdf` | Li H et al., Pharmacokinetics of cefoperazone/sulbac…, Journal of clinical pharmac… (2022) | popPK | 9 | [10.1111/jcpt.13660](https://doi.org/10.1111/jcpt.13660) | [35347732](https://pubmed.ncbi.nlm.nih.gov/35347732) | The study reports quantitative PK parameters (T1/2, Vss, CL) for cefoperazone in human patients with numerical values explicitly provided in the text. |
| `Wittman_1983.pdf` | Wittman DH et al., Penetration of eight beta-lactam antibi…, Archives of surgery (Chicag… (1983) | popPK | 9 | [10.1001/archsurg.1983.01390020055010](https://doi.org/10.1001/archsurg.1983.01390020055010) | [6849637](https://pubmed.ncbi.nlm.nih.gov/6849637) | The study reports pharmacokinetic parameters for cefoperazone in humans, but the specific numeric values are not present in the provided evidence text. |
| `Ye_2022.pdf` | Ye L et al., Pharmacokinetic and pharmacodynamic ana…, Analytical methods : advanc… (2022) | popPK | 9 | [10.1039/d1ay01385h](https://doi.org/10.1039/d1ay01385h) | [35225994](https://pubmed.ncbi.nlm.nih.gov/35225994) | The paper reports quantitative pharmacokinetic parameters (t1/2, AUC, Vd, CL) for cefoperazone in pediatric sepsis patients directly in the abstract/evidence text. |
| `Burmańczuk_2017.pdf` | Burmańczuk A et al., Withdrawal of cefoperazone with milk af…, Polish journal of veterinar… (2017) | popPK | 8 | [10.1515/pjvs-2017-0031](https://doi.org/10.1515/pjvs-2017-0031) | [28865230](https://pubmed.ncbi.nlm.nih.gov/28865230) | The paper describes a PK study in cows with a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided evidence text. |
| `Li_2026.pdf` | Li X et al., Pharmacokinetics and pharmacodynamics o…, The Journal of antimicrobia… (2026) | popPK | 8 | [10.1093/jac/dkag214](https://doi.org/10.1093/jac/dkag214) | [42318922](https://pubmed.ncbi.nlm.nih.gov/42318922) | The study reports PK parameters for cefoperazone in mice, but specific quantitative disposition values (CL, V, t1/2) are not listed in the evidence, only PK/PD targets. |
| `Chartrand_1983.pdf` | Chartrand SA et al., Cefoperazone pharmacokinetics in acute…, The Journal of pediatrics (1983) | popPK | 7 | [10.1016/s0022-3476(83)80738-0](https://doi.org/10.1016/s0022-3476(83)80738-0) | [6644441](https://pubmed.ncbi.nlm.nih.gov/6644441) | Reports half-life and compartmental model fit for cefoperazone in children, but specific numeric values for clearance and volume are not listed in the text. |
| `Zheng_2014.pdf` | Zheng J et al., [Experimental study on concentrations a…, Zhonghua wai ke za zhi [Chi… (2014) | popPK | 6 | not captured | [25573219](https://pubmed.ncbi.nlm.nih.gov/25573219) | The study reports quantitative pharmacokinetic parameters (Cmax, T1/2, compartmental model) for cefoperazone in rabbit bile. |
| `Dong_2019.pdf` | Dong Y et al., Cefoperazone/sulbactam therapeutic drug…, Basic & clinical pharmacolo… (2019) | popPK | 5 | [10.1111/bcpt.13245](https://doi.org/10.1111/bcpt.13245) | [31056857](https://pubmed.ncbi.nlm.nih.gov/31056857) | Study reports trough concentrations (Cmin) rather than compartmental PK parameters (CL, V, ka) for the drug. |

<sub>queue written 2026-10-07T11:21:37.449161+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burmańczuk_2017 | relevant | 8 | 2 | The paper describes a PK study in cows with a two-compartment model, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided evidence text. |
| popPK | Chartrand_1983 | relevant | 7 | 4 | Reports half-life and compartmental model fit for cefoperazone in children, but specific numeric values for clearance and volume are not listed in the text. |
| popPK | Dong_2019 | irrelevant | 5 | 4 | Study reports trough concentrations (Cmin) rather than compartmental PK parameters (CL, V, ka) for the drug. |
| popPK | Eandi_1982 | irrelevant | 10 | 0 | The study is relevant as it reports pharmacokinetic parameters for cefoperazone in rabbits, but no specific numeric values are provided in the extracted evidence. |
| popPK | Foulds_1983 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of sulbactam, and cefoperazone is only mentioned as a co-administered drug with no specific PK parameters reported for it. |
| popPK | Fourtillan_1983 | relevant | 9 | 2 | The paper reports PK parameters for cefoperazone in a comparative study, but specific numeric values for cefoperazone are contained in Tables I and III which are not fully provided in the text evidence. |
| popPK | Grabowski_2018 | relevant | 7 | 0 | The paper reports population PK parameters for cefoperazone in cows, but the specific numeric values are contained in Table 1 and Table 2, which are not provided in the evidence text. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, with cefoperazone serving only as a co-administered antibiotic and potential P-gp inhibitor, not as the subject drug. |
| PGx | Guo_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus (a PK parameter of tacrolimus) and a drug-drug interaction with cefoperazone, but does not report genetic variants affecting the PK or PD of cefoperazone itself. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sulbactam (a co-administered drug), not for cefoperazone, which is only mentioned as part of the combination product. |
| popPK | Huang_2024 | irrelevant | 2 | 0 | The paper is a research topic summary that mentions cefoperazone only in the context of pharmacodynamic efficacy (bactericidal activity), not quantitative pharmacokinetic parameter estimation. |
| popPK | Höffler_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefmenoxime, not cefoperazone (which is only mentioned for comparison). |
| popPK | Ito_1984 | irrelevant | 3 | 0 | While the study involves cefoperazone and mentions a 3-compartment model, it reports only drug concentrations in blood and exudate, not the specific quantitative PK parameters (CL, V, ka) required for extraction. |
| popPK | Jendroschek_1981 | relevant | 9 | 0 | The paper describes a PK study of cefoperazone in humans using a 3-compartment model, but the abstract/evidence provided does not contain the specific numeric parameter values (CL, V, half-life, etc.). |
| popPK | Kakiuchi_1985 | relevant | 10 | 2 | The study reports quantitative PK parameters (Cl, T1/2, K10) for cefoperazone in humans, but specific numeric values are not present in the provided abstract; they are likely in the full text or tables which are not included here. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for warfarin, using cefoperazone only as a clinical covariate in a regression model rather than studying cefoperazone's PK/PD. |
| popPK | Li_2026 | relevant | 8 | 2 | The study reports PK parameters for cefoperazone in mice, but specific quantitative disposition values (CL, V, t1/2) are not listed in the evidence, only PK/PD targets. |
| popPK | Lou_2007 | irrelevant | 1 | 0 | Cefoperazone is used as a co-administered drug to probe the pharmacokinetics of pazufloxacin, and no pharmacokinetic parameters for cefoperazone itself are reported. |
| popPK | Ohno_2007 | irrelevant | 0 | 0 | The study focuses on the PK/PD of ceftriaxone, using cefoperazone only as a comparator agent in susceptibility/PK calculations. |
| popPK | Onita_2025 | relevant | 10 | 0 | The paper describes a population PK model for cefoperazone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence. |
| popPK | Shi_2020 | relevant | 10 | 2 | The study is a population PK model of cefoperazone in children, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract or text. |
| popPK | Wittman_1983 | relevant | 9 | 3 | The study reports pharmacokinetic parameters for cefoperazone in humans, but the specific numeric values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:22 UTC</sub>
