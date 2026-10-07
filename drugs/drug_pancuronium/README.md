<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;pancuronium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pancuronium_Bienert2020_reference&quot;,&quot;label&quot;:&quot;Bienert_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pancuronium/Pancuronium_Bienert2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pancuronium_Rantanen2026_reference&quot;,&quot;label&quot;:&quot;Rantanen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pancuronium/Pancuronium_Rantanen2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pancuronium_Roch2011_reference&quot;,&quot;label&quot;:&quot;Roch_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pancuronium/Pancuronium_Roch2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pancuronium

- **generic name:** pancuronium
- **ATC codes:** `M03AC01`
- **DrugBank:** [DB01337](https://go.drugbank.com/drugs/DB01337) · **PubChem:** [CID 441289](https://pubchem.ncbi.nlm.nih.gov/compound/441289)
- **molar mass:** 572.8619 g/mol (C35H60N2O4) — DrugBank
- **groups:** approved

## About

Pancuronium is a non-depolarising neuromuscular blocking agent used to relax muscles, for example during surgery. It is an approved medicine and remains in use as a peripherally acting muscle relaxant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424297](https://www.wikidata.org/wiki/Q424297) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pancuronium | parent | 572.862 | C35H60N2O4 | DrugBank | [441289](https://pubchem.ncbi.nlm.nih.gov/compound/441289) | Cronnelly_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:29 | 17:11 | 3/2/1 | 3/0/0 | 0/0/0 | 527,846/21,594 | einfracz / qwen3.8-27b | 13 | 0/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bienert_2020_reference](drugs/drug_pancuronium/Pancuronium_Bienert2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Bienert A et al., The influence of cardiac output on prop…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-020-09712-1](https://doi.org/10.1007/s10928-020-09712-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rantanen_2026_reference](drugs/drug_pancuronium/Pancuronium_Rantanen2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Rantanen M et al., Population pharmacokinetics of methylpr…, European journal of clinica… (2026) | [10.1007/s00228-026-04168-7](https://doi.org/10.1007/s00228-026-04168-7) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Roch_2011_reference](drugs/drug_pancuronium/Pancuronium_Roch2011_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Roch A et al., Effect of fluid loading during hypovola…, Critical care (London, Engl… (2011) | [10.1186/cc10455](https://doi.org/10.1186/cc10455) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Cronnelly_1983_reference](drugs/drug_pancuronium/Pancuronium_Cronnelly1983_reference.md) | — | 1-compartment (no model) | 3 | Cronnelly R et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1983) | [10.1097/00000542-198305000-00002](https://doi.org/10.1097/00000542-198305000-00002) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Duvaldestin_1978_reference](drugs/drug_pancuronium/Pancuronium_Duvaldestin1978_reference.md) | — | 1-compartment (no model) | 0 | Duvaldestin P et al., Pancuronium pharmacokinetics in patient…, British journal of anaesthe… (1978) | [10.1093/bja/50.11.1131](https://doi.org/10.1093/bja/50.11.1131) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sohn_1986_reference](drugs/drug_pancuronium/Pancuronium_Sohn1986_reference.md) | — | 1-compartment (no model) | 0 | Sohn YJ et al., Comparative pharmacokinetics and dynami…, Anesthesia and analgesia (1986) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Evans_1984_EMG](drugs/drug_pancuronium/pd_Evans_1984_EMG.md) | EMG response ← pancuronium · direct sigmoid Emax (Hill) effect | — | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Evans_1984_EMG_2](drugs/drug_pancuronium/pd_Evans_1984_EMG_2.md) | EMG response ← pancuronium · direct sigmoid Emax (Hill) effect | — | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Evans_1984_mechanical_twitch_response](drugs/drug_pancuronium/pd_Evans_1984_mechanical_twitch_response.md) | twitch response ← pancuronium · direct sigmoid Emax (Hill) effect | — | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Evans_1984_mechanical_twitch_response_2](drugs/drug_pancuronium/pd_Evans_1984_mechanical_twitch_response_2.md) | twitch response ← pancuronium · direct sigmoid Emax (Hill) effect | — | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Evans_1984_paralysis](drugs/drug_pancuronium/pd_Evans_1984_paralysis.md) | paralysis ← pancuronium · direct sigmoid Emax (Hill) effect | — | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Graham_1986_TD](drugs/drug_pancuronium/pd_Graham_1986_TD.md) | depression of the first twitch ← pancuronium · delayed effect through an effect compartment | — | Graham GG et al., Relationship of train-of-four ratio to…, Anesthesiology (1986) | [10.1097/00000542-198612000-00003](https://doi.org/10.1097/00000542-198612000-00003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Graham_1986_TOF_ratio](drugs/drug_pancuronium/pd_Graham_1986_TOF_ratio.md) | train-of-four ratio ← pancuronium · delayed effect through an effect compartment | — | Graham GG et al., Relationship of train-of-four ratio to…, Anesthesiology (1986) | [10.1097/00000542-198612000-00003](https://doi.org/10.1097/00000542-198612000-00003) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hull_1978_muscle_twitch_response](drugs/drug_pancuronium/pd_Hull_1978_muscle_twitch_response.md) | muscle twitch response ← pancuronium · delayed effect through an effect compartment | — | Hull CJ et al., A pharmacodynamic model for pancuronium, British journal of anaesthe… (1978) | [10.1093/bja/50.11.1113](https://doi.org/10.1093/bja/50.11.1113) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pancuronium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRNA2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 258 matched, 96 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_22 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caldwell_1988.pdf` | Caldwell JE et al., Pipecuronium and pancuronium: compariso…, British journal of anaesthe… (1988) | popPK | 10 | [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693) | [2849968](https://pubmed.ncbi.nlm.nih.gov/2849968) | The study reports quantitative PK parameters for pancuronium (Vss and Cl) in human patients, with specific numeric values provided in the text. |
| `Duvaldestin_1978.pdf` | Duvaldestin P et al., Pancuronium pharmacokinetics in patient…, British journal of anaesthe… (1978) | popPK | 10 | [10.1093/bja/50.11.1131](https://doi.org/10.1093/bja/50.11.1131) | [718783](https://pubmed.ncbi.nlm.nih.gov/718783) | The study reports quantitative PK parameters (half-lives, clearance, volume) for pancuronium in humans, with specific values for half-lives and percentage changes provided in the text. |
| `Duvaldestin_1982.pdf` | Duvaldestin P et al., Pharmacokinetics of pancuronium in man:…, European journal of clinica… (1982) | popPK | 10 | [10.1007/BF00613623](https://doi.org/10.1007/BF00613623) | [7173308](https://pubmed.ncbi.nlm.nih.gov/7173308) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, clearance) and model description for pancuronium in humans. |
| `Evans_1984.pdf` | Evans MA et al., Pharmacokinetic and pharmacodynamic mod…, European journal of clinica… (1984) | popPK | 10 | [10.1007/BF00630293](https://doi.org/10.1007/BF00630293) | [6723764](https://pubmed.ncbi.nlm.nih.gov/6723764) | The study reports quantitative pharmacokinetic parameters for pancuronium, specifically total systemic plasma clearance (0.79 ml/min/kg) and terminal half-life (169 min), directly in the text. |
| `Xue_1996_2.pdf` | Xue F et al., [The pharmacokinetics of pancuronium br…, Zhongguo yi xue ke xue yuan… (1996) | popPK | 10 | not captured | [9208601](https://pubmed.ncbi.nlm.nih.gov/9208601) | The paper is a PK study of pancuronium reporting a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Cronnelly_1983.pdf` | Cronnelly R et al., Pharmacokinetics and pharmacodynamics o…, Anesthesiology (1983) | popPK | 8 | [10.1097/00000542-198305000-00002](https://doi.org/10.1097/00000542-198305000-00002) | [6132566](https://pubmed.ncbi.nlm.nih.gov/6132566) | The abstract provides quantitative clearance and half-life values for pancuronium in a three-compartment model study in humans. |
| `Xue_1996.pdf` | Xue F et al., Effects of enflurane and isoflurane ane…, Chinese medical journal (1996) | popPK | 8 | not captured | [8758316](https://pubmed.ncbi.nlm.nih.gov/8758316) | The study reports a two-compartment PK model for pancuronium in humans but the specific numeric parameter values are not present in the provided abstract text. |
| `Yajima_1990.pdf` | Yajima C et al., [Comparative pharmacokinetics of pipecu…, Masui. The Japanese journal… (1990) | popPK | 8 | not captured | [1976829](https://pubmed.ncbi.nlm.nih.gov/1976829) | The abstract reports quantitative pharmacokinetic parameters (V1, Vdss, Cl) for pancuronium, though with a small sample size (n=3) and primarily as a comparison to pipecuronium. |
| `Sohn_1986.pdf` | Sohn YJ et al., Comparative pharmacokinetics and dynami…, Anesthesia and analgesia (1986) | popPK | 7 | not captured | [2869721](https://pubmed.ncbi.nlm.nih.gov/2869721) | Reports quantitative plasma clearance and concentration parameters for pancuronium in a comparative PK/PD study in humans. |
| `Buzello_1978_3.pdf` | Buzello W et al., Kinetics of intercompartmental disposit…, Der Anaesthesist (1978) | popPK | 6 | not captured | [150805](https://pubmed.ncbi.nlm.nih.gov/150805) | The study describes a pharmacokinetic model for pancuronium but states that the data were taken from the literature and no specific numeric parameter values are present in the provided text. |
| `Shanks_1995.pdf` | Shanks CA et al., Calculation of an effect compartment ra…, British journal of anaesthe… (1995) | popPK | 6 | [10.1093/bja/75.1.109](https://doi.org/10.1093/bja/75.1.109) | [7669449](https://pubmed.ncbi.nlm.nih.gov/7669449) | The study reports derived effect-compartment rate constants (ke0) for pancuronium, which are PK parameters, but the specific numeric values are calculated from "published values" and not explicitly listed in the provided text. |
| `Somogyi_1977.pdf` | Somogyi AA et al., The effect of renal failure on the disp…, European journal of clinica… (1977) | popPK | 5 | [10.1007/BF00561401](https://doi.org/10.1007/BF00561401) | [332502](https://pubmed.ncbi.nlm.nih.gov/332502) | The paper reports qualitative pharmacokinetic changes (reduced clearance, increased half-life) for pancuronium in renal failure patients, but the specific numeric values are not present in the provided evidence. |
| `Cheng_1996.pdf` | Cheng H et al., Disposition decomposition analysis for…, Biopharmaceutics & drug dis… (1996) | pd | 5 | [10.1002/(SICI)1099-081X(199603)17:2&lt;117::AID-BDD949&gt;3.0.CO;2-A](https://doi.org/10.1002/(SICI)1099-081X(199603)17:2<117::AID-BDD949>3.0.CO;2-A) | [8907718](https://www.ncbi.nlm.nih.gov/pubmed/8907718) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Fawcett_1993.pdf` | Fawcett WJ et al., Comparison of recovery index of rocuron…, Anaesthesia (1993) | pd | 5 | [10.1111/j.1365-2044.1993.tb06900.x](https://doi.org/10.1111/j.1365-2044.1993.tb06900.x) | [8096371](https://www.ncbi.nlm.nih.gov/pubmed/8096371) | metadata signals extractable PD data (effectcompartment) |
| `Hull_1978.pdf` | Hull CJ et al., A pharmacodynamic model for pancuronium, British journal of anaesthe… (1978) | pd | 5 | [10.1093/bja/50.11.1113](https://doi.org/10.1093/bja/50.11.1113) | [718781](https://www.ncbi.nlm.nih.gov/pubmed/718781) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Marathe_1989.pdf` | Marathe PH et al., Effect of thermal injury on the pharmac…, Anesthesiology (1989) | pd | 5 | [10.1097/00000542-198905000-00007](https://doi.org/10.1097/00000542-198905000-00007) | [2719307](https://www.ncbi.nlm.nih.gov/pubmed/2719307) | metadata signals extractable PD data (EC50) |
| `Birmingham_1980.pdf` | Birmingham AT et al., A comparison of the skeletal neuromuscu…, British journal of pharmaco… (1980) | pd | 4 | [10.1111/j.1476-5381.1980.tb08730.x](https://doi.org/10.1111/j.1476-5381.1980.tb08730.x) | [6108148](https://www.ncbi.nlm.nih.gov/pubmed/6108148) | metadata signals extractable PD data (concentration-effect) |
| `Fragen_1983.pdf` | Fragen RJ et al., Interactions of diisopropyl phenol (ICI…, British journal of anaesthe… (1983) | pd | 4 | [10.1093/bja/55.5.433](https://doi.org/10.1093/bja/55.5.433) | [6133527](https://www.ncbi.nlm.nih.gov/pubmed/6133527) | metadata signals extractable PD data (EC50) |
| `Garland_1998.pdf` | Garland CM et al., The actions of muscle relaxants at nico…, European journal of pharmac… (1998) | pd | 4 | [10.1016/s0014-2999(98)00542-1](https://doi.org/10.1016/s0014-2999(98)00542-1) | [9788777](https://www.ncbi.nlm.nih.gov/pubmed/9788777) | metadata signals extractable PD data (EC50) |
| `Henning_1994.pdf` | Henning RH et al., Induction of Na+/K(+)-ATPase activity b…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb14758.x](https://doi.org/10.1111/j.1476-5381.1994.tb14758.x) | [8004390](https://www.ncbi.nlm.nih.gov/pubmed/8004390) | metadata signals extractable PD data (EC50) |
| `Okamoto_1992.pdf` | Okamoto T et al., [Neuromuscular blocking effect of ORG94…, Masui. The Japanese journal… (1992) | pd | 4 | not captured | [1433879](https://www.ncbi.nlm.nih.gov/pubmed/1433879) | metadata signals extractable PD data (IC50) |
| `Schuh_1981.pdf` | Schuh FT, [On dose-response curves and the recept…, Der Anaesthesist (1981) | pd | 4 | not captured | [6455927](https://www.ncbi.nlm.nih.gov/pubmed/6455927) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T02:27:24.425376+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2000 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paracetamol, not pancuronium. |
| popPK | Appadu_1994 | irrelevant | 0 | 0 | The study is an in vitro binding assay investigating receptor interactions, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Barvais_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alfentanil, and pancuronium is only mentioned as a co-administered muscle relaxant without any parameter estimation. |
| popPK | Baumert_2002 | irrelevant | 0 | 0 | The study investigates airway resistance in pigs and uses pancuronium only as a neuromuscular blocking agent for anesthesia, without reporting any pharmacokinetic parameters for the drug. |
| popPK | Bienert_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol and fentanyl, using pancuronium only as a co-administered neuromuscular blocking agent without modeling its disposition. |
| popPK | Birmingham_1980 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | Buzello_1978 | irrelevant | 2 | 0 | This is a comparative review stating data were taken from the literature to support a general conclusion, and no specific quantitative parameter values for pancuronium are present in the evidence. |
| popPK | Buzello_1978_2 | irrelevant | 2 | 0 | The text describes a pharmacokinetic model and qualitative findings for pancuronium in humans with renal impairment, but no numeric parameter values (CL, V, t1/2) are present in the provided evidence. |
| popPK | Buzello_1978_3 | relevant | 6 | 0 | The study describes a pharmacokinetic model for pancuronium but states that the data were taken from the literature and no specific numeric parameter values are present in the provided text. |
| popPK | Cameron_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanism study regarding chemical chelation and reversal of neuromuscular block, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cheng_1996 | irrelevant | 2 | 0 | The paper is a methodological simulation using "published data" and does not report original quantitative PK parameter values for pancuronium in the provided evidence. |
| popPK | Eaton_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ε-aminocaproic acid, not pancuronium. |
| popPK | Fahey_1981 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norcuron (Org NC 45), not pancuronium, which is mentioned only as a structural homologue. |
| popPK | Farrell_1981 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring potency (EC50) in mouse preparations, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pancuronium. |
| popPK | Fawcett_1993 | irrelevant | 0 | 0 | The study focuses on the recovery index (time-domain response) of rocuronium and vecuronium using pancuronium as a background comparator, rather than reporting quantitative pharmacokinetic parameters like clearance or volume for pancuronium. |
| popPK | Fragen_1983 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Garland_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on receptor binding/antagonism, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Graham_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (neuromuscular blockade kinetics) of pancuronium and does not report quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Henning_1994 | irrelevant | 0 | 0 | Pancuronium is used solely as a competitive antagonist to investigate the mechanism of Na+/K+-ATPase regulation in an in vitro cell model, with no pharmacokinetic parameters measured. |
| popPK | Henning_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium handling in mouse myotubes where pancuronium is used only as a pharmacological antagonist to block nicotinic receptors, and no pharmacokinetic parameters are reported. |
| popPK | Hennis_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of neostigmine, pyridostigmine, and edrophonium, using pancuronium only as a constant antagonist background in dogs. |
| popPK | Hsu_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for lidocaine, not pancuronium. |
| popPK | Hull_1978 | irrelevant | 2 | 0 | The paper focuses on a pharmacodynamic (receptor/biophase) model rather than reporting quantitative pharmacokinetic parameter values (CL, V, etc.) for pancuronium. |
| popPK | Hull_1980 | irrelevant | 3 | 0 | The paper is a pharmacodynamic study focusing on dose-response relationships and duration of action, not a study reporting quantitative pharmacokinetic parameter values (CL, V, etc.) for pancuronium. |
| popPK | Ivanović_2016 | irrelevant | 0 | 0 | The study focuses on the toxicology of diazinon in rats, using pancuronium only as a pharmacological tool (nicotinic antagonist) to verify neuromuscular junction function in vitro, with no pharmacokinetic parameters measured for pancuronium. |
| popPK | Jaklitsch_1990 | irrelevant | 2 | 0 | The paper describes a simulation model of neuromuscular blockade and heart rate, and does not report specific quantitative pharmacokinetic parameter values (CL, V, etc.) for pancuronium in the provided evidence. |
| PGx | Kawate_1991 | not_relevant | 0 | 0 | The paper investigates the physiological response to sodium nitroprusside in rats using pancuronium for paralysis, with no focus on pharmacogenomics or specific PK/PD parameters of pancuronium. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is an in vivo drug screen in zebrafish for neuroprotective compounds and does not involve pancuronium or its pharmacokinetics. |
| popPK | Kimura_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium transients in mouse diaphragm, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Knibbe_2002 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for propofol, not pancuronium. |
| popPK | Kratimenos_2022 | irrelevant | 0 | 0 | Pancuronium is used only as an anesthetic/paralytic co-medication in a piglet study, not as the subject of pharmacokinetic analysis; the paper focuses on computational modeling of neuronal excitotoxicity. |
| popPK | Litvin_2026 | irrelevant | 0 | 0 | The paper studies retinal electrophysiology in mice and patients, containing no pharmacokinetic data for pancuronium. |
| popPK | Marathe_1989 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Milchert_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of muscarinic receptor effects on smooth muscle tone, not a pharmacokinetic study. |
| popPK | Miyahara_1995 | irrelevant | 0 | 0 | Pancuronium is used only as a paralytic agent to facilitate anesthesia in dogs, and the study reports pharmacokinetic parameters for glucose and indocyanine green, not for pancuronium. |
| PGx | Nagashima_2005 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving pancuronium in vitro, not pharmacogenomic effects of gene variants on PK/PD. |
| popPK | Okada_2015 | irrelevant | 1 | 0 | This is a preclinical study in mice measuring the effect of pancuronium on tugging force (neuromuscular blockade) rather than reporting quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Ornstein_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of metocurine, with pancuronium mentioned only as a comparator in the background context. |
| popPK | Potter_1989 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay focusing on muscarine receptors, and pancuronium is included only as a comparative ligand, not as a subject of pharmacokinetic analysis. |
| popPK | Rantanen_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methylprednisolone; pancuronium is only mentioned as a concomitant anesthetic agent and no PK data for it are provided. |
| popPK | Requejo_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of topotecan in pigs; pancuronium is only mentioned as a maintenance anesthetic agent during the procedure. |
| popPK | Roch_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caspofungin in pigs, and pancuronium is only mentioned as an anesthetic agent used to maintain sedation, with no PK parameters reported for it. |
| popPK | Rupp_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-aminopyridine, with pancuronium used only as a tool to establish neuromuscular blockade, and no PK parameters for pancuronium are reported. |
| popPK | Schiavello_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lidocaine, with pancuronium serving only as a co-administered anesthetic agent. |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | The study focuses on dose-response curves and receptor interaction (pharmacodynamics) of pancuronium, not pharmacokinetic parameters like clearance or volume. |
| popPK | Shanks_1995 | relevant | 6 | 0 | The study reports derived effect-compartment rate constants (ke0) for pancuronium, which are PK parameters, but the specific numeric values are calculated from "published values" and not explicitly listed in the provided text. |
| popPK | Somogyi_1977 | irrelevant | 5 | 0 | The paper reports qualitative pharmacokinetic changes (reduced clearance, increased half-life) for pancuronium in renal failure patients, but the specific numeric values are not present in the provided evidence. |
| popPK | Thakre_2026 | irrelevant | 0 | 0 | The study investigates phrenic neuroplasticity using an ampakine, and pancuronium is only mentioned as a neuromuscular blocking agent used to facilitate ventilation in rats, with no pharmacokinetic parameters reported for it. |
| popPK | Truchetti_2014 | irrelevant | 0 | 0 | Pancuronium is used solely as a neuromuscular blocker to facilitate respiratory mechanics measurements in animals, and no pharmacokinetic parameters for pancuronium are reported. |
| popPK | Valtola_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of oxycodone, not pancuronium (which is only mentioned as an anesthetic agent used during surgery). |
| popPK | Wildschut_2012 | irrelevant | 0 | 0 | This is a review article regarding drug disposition in pediatric patients on ECMO and does not report specific pharmacokinetic parameters for pancuronium. |
| PGx | Woodside_1984 | not_relevant | 0 | 0 | The study investigates a pharmacodynamic interaction between captopril and sodium nitroprusside; there is no examination of a gene variant or pharmacogenomic effect on the PK or PD of pancuronium. |
| popPK | Xue_1996 | relevant | 8 | 1 | The study reports a two-compartment PK model for pancuronium in humans but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Xue_1996_2 | relevant | 10 | 2 | The paper is a PK study of pancuronium reporting a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | van_1980 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of Org NC 45, using pancuronium only as a comparator for onset and duration of action. |
| popPK | van_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rocuronium, not pancuronium. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:27 UTC</sub>
