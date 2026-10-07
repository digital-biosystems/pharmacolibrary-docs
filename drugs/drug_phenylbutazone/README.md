<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;phenylbutazone&quot;}]"></div>

# phenylbutazone

- **generic name:** phenylbutazone
- **ATC codes:** `M01AA01`, `M01BA01`, `M02AA01`
- **DrugBank:** [DB00812](https://go.drugbank.com/drugs/DB00812) · **PubChem:** [CID 4781](https://pubchem.ncbi.nlm.nih.gov/compound/4781)
- **molar mass:** 308.3743 g/mol (C19H20N2O2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Phenylbutazone is a non-steroidal anti-inflammatory drug that was used to treat pain and inflammatory conditions such as rheumatic disease. It has been withdrawn for human use in most countries because of serious side effects, but it remains approved in veterinary medicine, mainly for horses and dogs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421342](https://www.wikidata.org/wiki/Q421342) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylbutazone | parent | 308.374 | C19H20N2O2 | DrugBank | [4781](https://pubchem.ncbi.nlm.nih.gov/compound/4781) | Kadir_1997, Lees_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:57 | 11:44 | 0/3/2 | 1/0/0 | 0/0/0 | 414,037/28,616 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">camelid</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Kadir_1997_reference](drugs/drug_phenylbutazone/Phenylbutazone_Kadir1997_reference.md) | — | 1-compartment (no model) | 6 | Kadir A et al., Phenylbutazone pharmacokinetics and bio…, Journal of veterinary pharm… (1997) | [10.1046/j.1365-2885.1997.04427.x](https://doi.org/10.1046/j.1365-2885.1997.04427.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Lees_1987_reference](drugs/drug_phenylbutazone/Phenylbutazone_Lees1987_reference.md) | — | 1-compartment (no model) | 5 | Lees P et al., Metabolism, excretion, pharmacokinetics…, The Cornell veterinarian (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delbeke_1993_reference](drugs/drug_phenylbutazone/Phenylbutazone_Delbeke1993_reference.md) | — | 1-compartment (no model) | 0 | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ekstrand_2026_reference](drugs/drug_phenylbutazone/Phenylbutazone_Ekstrand2026_reference.md) | — | 2-compartment (no model) | 5 | Ekstrand C et al., Differences in Plasma Exposure of Canna…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70027](https://doi.org/10.1111/jvp.70027) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lees_1988_reference](drugs/drug_phenylbutazone/Phenylbutazone_Lees1988_reference.md) | — | 1-compartment (no model) | 0 | Lees P et al., Pharmacokinetics, metabolism and excret…, Research in veterinary scie… (1988) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Toutain_1994_local_skin_temperature](drugs/drug_phenylbutazone/pd_Toutain_1994_local_skin_temperature.md) | local skin temperature biomarker turnover ← phenylbutazone | — | Toutain PL et al., Plasma concentrations and therapeutic e…, Journal of veterinary pharm… (1994) | [10.1111/j.1365-2885.1994.tb00278.x](https://doi.org/10.1111/j.1365-2885.1994.tb00278.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Toutain_1994_rest_angle_flexion](drugs/drug_phenylbutazone/pd_Toutain_1994_rest_angle_flexion.md) | rest angle flexion biomarker turnover ← phenylbutazone | — | Toutain PL et al., Plasma concentrations and therapeutic e…, Journal of veterinary pharm… (1994) | [10.1111/j.1365-2885.1994.tb00278.x](https://doi.org/10.1111/j.1365-2885.1994.tb00278.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Toutain_1994_stride_length](drugs/drug_phenylbutazone/pd_Toutain_1994_stride_length.md) | stride length biomarker turnover ← phenylbutazone | — | Toutain PL et al., Plasma concentrations and therapeutic e…, Journal of veterinary pharm… (1994) | [10.1111/j.1365-2885.1994.tb00278.x](https://doi.org/10.1111/j.1365-2885.1994.tb00278.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenylbutazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor/substrate, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PTGIS (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 164 matched, 100 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Houck_2022.pdf` | Houck EL et al., Phenylbutazone pharmacokinetics in sout…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13036](https://doi.org/10.1111/jvp.13036) | [34894412](https://pubmed.ncbi.nlm.nih.gov/34894412) | The study is a population pharmacokinetic analysis of phenylbutazone in rhinoceroses reporting key parameters (Cmax, Tmax, t1/2) in the abstract, but detailed numeric values for clearance, volume, or Q are not present in the provided evidence. |
| `Kadir_1997.pdf` | Kadir A et al., Phenylbutazone pharmacokinetics and bio…, Journal of veterinary pharm… (1997) | popPK | 10 | [10.1046/j.1365-2885.1997.04427.x](https://doi.org/10.1046/j.1365-2885.1997.04427.x) | [9049950](https://pubmed.ncbi.nlm.nih.gov/9049950) | The study reports quantitative pharmacokinetic parameters (Vd, half-lives, bioavailability) for phenylbutazone in camels, with key values provided in the abstract text. |
| `Lees_1987.pdf` | Lees P et al., Metabolism, excretion, pharmacokinetics…, The Cornell veterinarian (1987) | popPK | 10 | not captured | [3568689](https://pubmed.ncbi.nlm.nih.gov/3568689) | The abstract provides specific numeric pharmacokinetic parameters (beta, t1/2 beta, Vdarea, C1B) for phenylbutazone in horses. |
| `Lees_1988.pdf` | Lees P et al., Pharmacokinetics, metabolism and excret…, Research in veterinary scie… (1988) | popPK | 10 | not captured | [3375589](https://pubmed.ncbi.nlm.nih.gov/3375589) | The abstract provides explicit quantitative PK parameters for phenylbutazone in cattle, including a three-compartment model description, mean elimination half-life (35.9 h), and clearance (2.77 ml kg-1 h-1). |
| `Wasfi_1997.pdf` | Wasfi IA et al., Pharmacokinetics of phenylbutazone in c…, American journal of veterin… (1997) | popPK | 10 | not captured | [9185972](https://pubmed.ncbi.nlm.nih.gov/9185972) | The paper reports quantitative disposition parameters (half-life and clearance) for phenylbutazone in camels within the text. |
| `Zaghloul_2024.pdf` | Zaghloul IY et al., Comparative pharmacokinetics of phenylb…, American journal of veterin… (2024) | popPK | 10 | [10.2460/ajvr.24.01.0012](https://doi.org/10.2460/ajvr.24.01.0012) | [38942059](https://pubmed.ncbi.nlm.nih.gov/38942059) | The paper describes a pharmacokinetic study of phenylbutazone in horses but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence text. |
| `Delbeke_1993.pdf` | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | popPK | 9 | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) | [8230399](https://pubmed.ncbi.nlm.nih.gov/8230399) | The paper reports quantitative PK parameters (half-life, terminal rate constant, peak concentration) for phenylbutazone, which is the major metabolite of the subject drug suxibuzone, fulfilling the criteria for metabolite kinetics. |
| `Landuyt_1993.pdf` | Landuyt J et al., The intramuscular bioavailability of a…, Journal of veterinary pharm… (1993) | popPK | 8 | [10.1111/j.1365-2885.1993.tb00216.x](https://doi.org/10.1111/j.1365-2885.1993.tb00216.x) | [8126767](https://pubmed.ncbi.nlm.nih.gov/8126767) | The study reports quantitative PK parameters (bioavailability, compartment models) for phenylbutazone, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| `Sioufi_1980.pdf` | Sioufi A et al., Pharmacokinetics of phenylbutazone in h…, Journal of pharmaceutical s… (1980) | popPK | 8 | [10.1002/jps.2600691216](https://doi.org/10.1002/jps.2600691216) | [7463328](https://pubmed.ncbi.nlm.nih.gov/7463328) | The study reports pharmacokinetic parameters for phenylbutazone in humans, but specific numeric values for clearance, volume of distribution, and intercompartmental clearance are not explicitly listed in the provided text (only half-life). |
| `Toutain_1994.pdf` | Toutain PL et al., Plasma concentrations and therapeutic e…, Journal of veterinary pharm… (1994) | popPK | 8 | [10.1111/j.1365-2885.1994.tb00278.x](https://doi.org/10.1111/j.1365-2885.1994.tb00278.x) | [7707492](https://pubmed.ncbi.nlm.nih.gov/7707492) | The study is a PK/PD model of phenylbutazone in horses, but the evidence only reports pharmacodynamic parameters (EC50) and lacks explicit numeric PK disposition parameters (CL, V, half-life). |
| `Whittem_1996.pdf` | Whittem T et al., Pharmacokinetic interactions between re…, Journal of veterinary pharm… (1996) | popPK | 8 | [10.1111/j.1365-2885.1996.tb00082.x](https://doi.org/10.1111/j.1365-2885.1996.tb00082.x) | [8971674](https://pubmed.ncbi.nlm.nih.gov/8971674) | The study is a relevant pharmacokinetic investigation of phenylbutazone in horses, but the specific numeric parameter values for phenylbutazone (such as clearance or half-life) are not present in the provided text, which only reports the qualitative result that no changes were detected by gentamicin. |
| `Jaraiz_1999.pdf` | Jaraiz MV et al., Disposition and tolerance of suxibuzone…, Equine veterinary journal (1999) | popPK | 6 | [10.1111/j.2042-3306.1999.tb03841.x](https://doi.org/10.1111/j.2042-3306.1999.tb03841.x) | [10505957](https://pubmed.ncbi.nlm.nih.gov/10505957) | The study measures pharmacokinetic parameters (MRT, Cmax) for phenylbutazone in horses, but it is a non-compartmental analysis following administration of suxibuzone (a prodrug), and key parameters like clearance and volume of distribution are not explicitly reported. |
| `Young_1994.pdf` | Young DB et al., Effects of phenylbutazone on thiamylal…, Journal of veterinary pharm… (1994) | popPK | 6 | [10.1111/j.1365-2885.1994.tb00265.x](https://doi.org/10.1111/j.1365-2885.1994.tb00265.x) | [7853465](https://pubmed.ncbi.nlm.nih.gov/7853465) | The study reports that phenylbutazone pharmacokinetics were described by a two-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| `Maitho_1986.pdf` | Maitho TE et al., Absorption and pharmacokinetics of phen…, Journal of veterinary pharm… (1986) | popPK | 5 | [10.1111/j.1365-2885.1986.tb00009.x](https://doi.org/10.1111/j.1365-2885.1986.tb00009.x) | [3701913](https://pubmed.ncbi.nlm.nih.gov/3701913) | The study describes a compartmental model and reports bioavailability, but specific numeric values for clearance, volume of distribution, or absorption rate constants are not present in the provided evidence. |

<sub>queue written 2026-10-07T01:55:24.716782+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aledavood_2025 | irrelevant | 0 | 0 | The paper is a computational in-silico study on CHI3L1 inhibition where phenylbutazone is only listed as a screen hit, with no PK parameters reported. |
| PGx | Ashirmetov_1989 | not_relevant | 0 | 0 | The study investigates the effect of surgical liver denervation on pharmacokinetics, not the effect of a genetic variant/genotype. |
| popPK | Bartelink_2014 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of lopinavir/ritonavir and efavirenz in HIV patients, not phenylbutazone. |
| popPK | Benz-de_2014 | irrelevant | 0 | 0 | The study focuses on methotrexate pharmacokinetics and does not report any data for phenylbutazone. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning platform (RECOVER) for identifying synergistic drug combinations in vitro and does not contain pharmacokinetic data or parameters for phenylbutazone. |
| PGx | Bochsler_1996 | not_relevant | 0 | 0 | The paper investigates bovine macrophage biology and nitric oxide generation, with no mention of human or animal genetics, genotypes, or pharmacogenomic effects on phenylbutazone PK/PD. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | This is a review article discussing general drug interactions with NSAIDs and does not report specific quantitative pharmacokinetic parameters for phenylbutazone. |
| popPK | Burgos_2003 | irrelevant | 0 | 0 | Phenylbutazone is used only as a comparative standard (positive control) in an in-vitro physiological study of rat uterine smooth muscle, with no pharmacokinetic parameters reported. |
| popPK | Chan_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of warfarin, and phenylbutazone is only used as a co-administered enzyme inhibitor to assess drug interactions, not as the subject drug. |
| popPK | Cheng_1998 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (in vivo COX inhibition) rather than population pharmacokinetics, and no PK parameters (CL, V, etc.) are reported for phenylbutazone. |
| popPK | Clarke_1989 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of a tissue-chamber implant model in cattle, using phenylbutazone as a probe drug to characterize tissue distribution rather than reporting systemic disposition parameters for the drug itself. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper is a drug screening study for radioprotection in mice, using phenylbutazone only as a candidate agent; it does not report quantitative PK parameters for phenylbutazone (only cites general literature values). |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper evaluates post-mortem inspection delays for disease and contaminant detection in ungulates and does not contain pharmacokinetic parameter estimates for phenylbutazone. |
| popPK | Ekstrand_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cannabidiol (CBD) and cannabidiolic acid (CBDA) in horses, not phenylbutazone. |
| PGx | Han_2012 | not_relevant | 0 | 0 | The paper studies the glucuronidation of salvianolic acid A and uses phenylbutazone only as a chemical inhibitor, not as the drug of interest in a pharmacogenomic study. |
| popPK | Houck_2022 | relevant | 10 | 3 | The study is a population pharmacokinetic analysis of phenylbutazone in rhinoceroses reporting key parameters (Cmax, Tmax, t1/2) in the abstract, but detailed numeric values for clearance, volume, or Q are not present in the provided evidence. |
| popPK | Hughes_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of piperaquine, not phenylbutazone. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper reports in vitro UGT inhibition of phenylbutazone but does not report any genetic variants or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Kappers_1996 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (inhibition) of CYP2C10 activity by NSAIDs like phenylbutazone in a cell line, not a pharmacogenomic effect of a genetic variant on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Kerdpin_2008 | not_relevant | 0 | 0 | The study focuses on the glucuronidation of frusemide (furosemide) and identifies UGT enzymes, using phenylbutazone only as a non-specific inhibitor in an in vitro setting, rather than investigating the pharmacogenomics of phenylbutazone itself. |
| popPK | Knych_2016 | irrelevant | 1 | 0 | The study's primary subject is methocarbamol, with phenylbutazone included only as a co-administered drug for comparison, and no specific quantitative PK parameters for phenylbutazone are provided in the evidence. |
| popPK | Krause_1981 | irrelevant | 4 | 0 | The paper describes a method for estimating PK parameters using phenylbutazone data as an example, but the evidence provided contains only the abstract/description without any specific numeric parameter values (CL, V, etc.). |
| popPK | Landuyt_1993 | relevant | 8 | 0 | The study reports quantitative PK parameters (bioavailability, compartment models) for phenylbutazone, but specific numeric values for clearance, volume, or rate constants are not present in the provided text. |
| popPK | Lees_2004 | irrelevant | 2 | 0 | This is a review article describing PK-PD modeling principles for NSAIDs, including phenylbutazone, but the provided evidence contains no original quantitative PK parameter values (CL, V, ka, etc.). |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses phenylbutazone only as a general inhibitor of CYP2C9 affecting other drugs, rather than reporting a pharmacogenomic effect on phenylbutazone's own PK/PD parameters. |
| popPK | Maitho_1986 | irrelevant | 5 | 0 | The study describes a compartmental model and reports bioavailability, but specific numeric values for clearance, volume of distribution, or absorption rate constants are not present in the provided evidence. |
| popPK | McIntyre_1977 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacology study on isolated guinea-pig trachea, containing no pharmacokinetic data for phenylbutazone. |
| popPK | Milligan_2002 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sildenafil, not phenylbutazone. |
| PGx | Miners_1998 | not_relevant | 0 | 0 | The paper is a general review of CYP2C9 and mentions phenylbutazone only as an inhibitor of the enzyme, not as the study drug being pharmacogenomically modulated. |
| popPK | Munn_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carprofen in sheep, not phenylbutazone. |
| PGx | Muzeeb_2006 | not_relevant | 0 | 0 | The paper studies the glucuronidation of DRF-6574, and phenylbutazone is only mentioned as an inhibitor of the reaction, not as the substrate undergoing pharmacogenomic analysis. |
| PGx | Nerusu_2019 | not_relevant | 5 | 0 | The study investigates in vitro protein-ligand binding changes via recombinant mutants using spectroscopy, and does not report in vivo pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nielsen-Kudsk_1980 | irrelevant | 2 | 0 | The study validates an HPLC method for phenylbutazone but only reports specific PK parameter values for naproxen in a single subject; no quantitative PK data for phenylbutazone are provided. |
| PGx | Nozaki_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (transporter inhibition) involving phenylbutazone but does not report any gene variants or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Ogg_1997 | not_relevant | 0 | 0 | The paper develops an assay for CYP3A4 induction using phenylbutazone as a tool compound, not a study on how a gene variant changes phenylbutazone's PK or PD. |
| PGx | Ogg_1999 | not_relevant | 0 | 0 | The paper reports an in vitro gene induction study of CYP3A4 without any pharmacogenomic analysis or specific data on phenylbutazone PK/PD changes. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The paper is a radioprotection study using phenylbutazone as a candidate drug in mice, not a pharmacokinetic study, and the only PK-like values mentioned are cited literature for horses, not data from this study. |
| popPK | Saso_1999 | irrelevant | 0 | 0 | Phenylbutazone is only mentioned as a non-steroidal anti-inflammatory drug comparator in a mechanistic discussion regarding protein denaturation inhibition, with no pharmacokinetic parameters reported. |
| popPK | Sathe_1999 | irrelevant | 0 | 0 | Phenylbutazone is only used as a case example in Monte-Carlo simulations for a bioequivalence methodology study, and no quantitative pharmacokinetic parameters for it are reported in the provided evidence. |
| popPK | Sioufi_1980 | relevant | 8 | 3 | The study reports pharmacokinetic parameters for phenylbutazone in humans, but specific numeric values for clearance, volume of distribution, and intercompartmental clearance are not explicitly listed in the provided text (only half-life). |
| PGx | Song_2014 | not_relevant | 0 | 0 | The study investigates the metabolism of bergenin, and phenylbutazone is only mentioned as a non-specific UGT inhibitor, not as the target drug for pharmacogenomic analysis. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA receptor binding interactions, and phenylbutazone is only listed as a comparator that did not potentiate the effect, with no pharmacokinetic parameters reported. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving phenylbutazone as an inhibitor of nateglinide metabolism, not the effect of gene variants on phenylbutazone pharmacokinetics or pharmacodynamics. |
| popPK | Toutain_1994 | relevant | 8 | 0 | The study is a PK/PD model of phenylbutazone in horses, but the evidence only reports pharmacodynamic parameters (EC50) and lacks explicit numeric PK disposition parameters (CL, V, half-life). |
| PGx | Uchaipichat_2006 | not_relevant | 0 | 0 | The paper focuses on in vitro UGT enzyme selectivity using phenylbutazone as a nonselective inhibitor probe and does not involve genetic variants affecting the pharmacokinetics or pharmacodynamics of phenylbutazone. |
| PGx | Vesell_1968_2 | not_relevant | 1 | 0 | The paper focuses on the genetic control of antipyrine levels and explicitly states there was no significant correlation between antipyrine and phenylbutazone half-lives, reporting no specific pharmacogenomic effect on phenylbutazone. |
| popPK | Whittem_1996 | relevant | 8 | 1 | The study is a relevant pharmacokinetic investigation of phenylbutazone in horses, but the specific numeric parameter values for phenylbutazone (such as clearance or half-life) are not present in the provided text, which only reports the qualitative result that no changes were detected by gentamicin. |
| popPK | Young_1994 | relevant | 6 | 0 | The study reports that phenylbutazone pharmacokinetics were described by a two-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence. |
| popPK | Zaghloul_2024 | relevant | 10 | 3 | The paper describes a pharmacokinetic study of phenylbutazone in horses but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided evidence text. |
| PGx | Zhang_2016 | not_relevant | 0 | 0 | Phenylbutazone is used only as a chemical inhibitor for UGTs; the paper does not report pharmacogenomic effects on phenylbutazone's PK/PD. |
| PGx | Zweers-Zeilmaker_1997 | not_relevant | 0 | 0 | The study investigates in vitro enzyme inhibition potency of phenylbutazone and other drugs in goat liver, containing no pharmacogenomic data or human PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:55 UTC</sub>
