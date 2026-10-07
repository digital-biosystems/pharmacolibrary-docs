<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefixime&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefixime_AlmelaFerrer2026_reference&quot;,&quot;label&quot;:&quot;Almela-Ferrer_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefixime/Cefixime_AlmelaFerrer2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefixime_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefixime/Cefixime_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefixime_Edwina2023_reference&quot;,&quot;label&quot;:&quot;Edwina_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefixime/Cefixime_Edwina2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefixime_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefixime/Cefixime_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefixime

- **generic name:** cefixime
- **ATC codes:** `J01DD08`, `J01RA15`, `J01RA16`
- **DrugBank:** [DB00671](https://go.drugbank.com/drugs/DB00671) · **PubChem:** [CID 5362065](https://pubchem.ncbi.nlm.nih.gov/compound/5362065)
- **molar mass:** 453.45 g/mol (C16H15N5O7S2) — DrugBank
- **groups:** approved, investigational

## About

Cefixime is a third-generation cephalosporin antibiotic used to treat bacterial infections such as gonorrhea, urinary tract infections, bronchitis, otitis media, and strep throat. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q163901](https://www.wikidata.org/wiki/Q163901) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:01 | 19:08 | 4/2/0 | 2/0/0 | 0/0/0 | 713,093/35,846 | einfracz / qwen3.8-27b | 29 | 3/21 | 29/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Almela-Ferrer_2026_reference](drugs/drug_cefixime/Cefixime_AlmelaFerrer2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Almela-Ferrer MDR et al., Molecular epidemiology and pharmacokine…, European journal of clinica… (2026) | [10.1007/s10096-026-05591-5](https://doi.org/10.1007/s10096-026-05591-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Alonso_2021_reference](drugs/drug_cefixime/Cefixime_Alonso2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Alonso R et al., Molecular Epidemiology, Antimicrobial S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101699](https://doi.org/10.3390/pharmaceutics13101699) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Edwina_2023_reference](drugs/drug_cefixime/Cefixime_Edwina2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Edwina AE et al., Population plasma and urine pharmacokin…, European journal of clinica… (2023) | [10.1007/s00228-023-03477-5](https://doi.org/10.1007/s00228-023-03477-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2019_reference](drugs/drug_cefixime/Cefixime_Wang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Wang D et al., Population pharmacokinetics of tacrolim…, Experimental and therapeuti… (2019) | [10.3892/etm.2019.8129](https://doi.org/10.3892/etm.2019.8129) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yamaoka_1990_reference](drugs/drug_cefixime/Cefixime_Yamaoka1990_reference.md) | — | 1-compartment (no model) | 0 | Yamaoka K et al., Analysis of enterohepatic circulation o…, Journal of pharmacokinetics… (1990) | [10.1007/BF01073938](https://doi.org/10.1007/BF01073938) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Zhong_2024_reference](drugs/drug_cefixime/Cefixime_Zhong2024_reference.md) | — | 1-compartment (no model) | 2 | Zhong J et al., Evaluating the efficacy of different an…, BMC infectious diseases (2024) | [10.1186/s12879-023-08938-x](https://doi.org/10.1186/s12879-023-08938-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Foerster_2016_resp](drugs/drug_cefixime/pd_Foerster_2016_resp.md) | bacterial growth rate ← cefixime · direct sigmoid Emax (Hill) effect | — | Foerster S et al., Time-kill curve analysis and pharmacody…, BMC microbiology (2016) | [10.1186/s12866-016-0838-9](https://doi.org/10.1186/s12866-016-0838-9) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Liu_2005_2_bacterial_time_kill_curves](drugs/drug_cefixime/pd_Liu_2005_2_bacterial_time_kill_curves.md) | bacterial time-kill curves ← cefixime · direct sigmoid Emax (Hill) effect | — | Liu P et al., Pharmacokinetic-pharmacodynamic modelli…, International journal of an… (2005) | [10.1016/j.ijantimicag.2004.09.012](https://doi.org/10.1016/j.ijantimicag.2004.09.012) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefixime) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A8` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 177 matched, 85 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 4  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khadam_2019.pdf` | Khadam MW et al., Disposition kinetics, renal clearance a…, JPMA. The Journal of the Pa… (2019) | popPK | 10 | not captured | [30890829](https://pubmed.ncbi.nlm.nih.gov/30890829) | The paper reports quantitative PK parameters (CL, V, t1/2) for cefixime in humans with specific numeric values provided in the abstract. |
| `Yamaoka_1990.pdf` | Yamaoka K et al., Analysis of enterohepatic circulation o…, Journal of pharmacokinetics… (1990) | popPK | 9 | [10.1007/BF01073938](https://doi.org/10.1007/BF01073938) | [2280349](https://pubmed.ncbi.nlm.nih.gov/2280349) | The study reports quantitative parameters (recovery ratios, mean transit times) for cefixime PK in rats, though specific standard parameters like CL or V are not explicitly listed in the abstract snippet. |
| `Yano_1991.pdf` | Yano Y et al., Effect of perfusion rate on the local d…, Drug metabolism and disposi… (1991) | popPK | 8 | not captured | [1687006](https://pubmed.ncbi.nlm.nih.gov/1687006) | The study reports quantitative disposition parameters (partition ratio, volume of blood space, irreversible transfer rate) for cefixime in a rat liver perfusion system, which is a valid in-vivo pharmacokinetic model, though not a systemic population PK model. |

<sub>queue written 2026-10-07T10:52:38.862764+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdallah_2026 | irrelevant | 0 | 0 | The paper is a review on biogenic nanoparticles for antibiotic resistance and does not contain pharmacokinetic data or parameters for cefixime. |
| popPK | Almela-Ferrer_2026 | relevant | 4 | 7 | Cefixime is one of several drugs included in a PK/PD analysis using literature-derived parameters (F, Ka, Vd), not a primary PK study, but numeric values are present in the table. |
| popPK | Alonso_2021 | irrelevant | 3 | 4 | This is a PK/PD simulation study for N. gonorrhoeae that utilizes literature-derived pharmacokinetic parameters for cefixime (CL/F, Vd, Ka) rather than conducting an original population-PK study to estimate these parameters. |
| popPK | Brennan_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of irinotecan and gefitinib, not cefixime. |
| popPK | Cappelletty_1996 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamic study where cefixime is a comparator drug with simulated PK, not a study measuring actual disposition parameters for cefixime. |
| popPK | Cattrall_2019 | irrelevant | 0 | 0 | The paper is a review/simulation study focusing on PK/PD of other antibiotics (amoxicillin, ciprofloxacin, etc.), and cefixime is only mentioned as a comparator in the discussion without any quantitative PK data provided. |
| popPK | DuBois_2012 | irrelevant | 0 | 0 | The study concerns vincristine, irinotecan, and MIBG, not cefixime. |
| PGx | DuBois_2015 | not_relevant | 0 | 0 | The study investigates the impact of UGT1A1 genotype on the toxicity profile (thrombocytopenia, diarrhoea) of irinotecan and 131I-MIBG, not on the PK or PD parameters of cefixime. |
| popPK | Foerster_2016 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic time-kill curve analysis, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka) for cefixime. |
| popPK | Furman_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of irinotecan and gefitinib, not cefixime. |
| popPK | Haseeb_2022 | irrelevant | 0 | 0 | The paper is a systematic review of beta-lactams in general, and the provided evidence contains PK data for other antibiotics (e.g., amoxicillin, piperacillin, cefotaxime) but no specific numeric PK parameters for cefixime. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | The study is a microbiological/mechanistic analysis of an antipsychotic derivative against Salmonella, where cefixime is used only as a comparator antibiotic in an in-vitro cell assay without any pharmacokinetic modeling or parameter estimation. |
| popPK | Kartbayeva_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemistry and pharmacological activities of Cirsium plants and contains no data regarding cefixime. |
| PGx | Kolluru_2025 | not_relevant | 0 | 0 | The paper focuses on machine learning prediction of bacterial antimicrobial resistance in Neisseria gonorrhoeae, not on human pharmacogenomics or PK/PD parameters of cefixime. |
| popPK | Kong_2022 | irrelevant | 2 | 0 | This is a study protocol for a trial that plans to measure PK parameters for cefixime, but it does not contain the results or any quantitative parameter values. |
| popPK | Li_2009 | irrelevant | 0 | 0 | The study evaluates cefaclor and amoxicillin, not cefixime. |
| popPK | Liu_2005 | irrelevant | 3 | 0 | The study provides summary AUC and tissue penetration data but does not report specific compartmental pharmacokinetic parameters (CL, V, Q, ka) required for extraction, and cefixime serves as a comparator to cefpodoxime. |
| popPK | Liu_2005_2 | irrelevant | 2 | 0 | The paper is an in vitro PK-PD study focusing on antibacterial activity (EC50) rather than reporting quantitative human population pharmacokinetic disposition parameters (CL, V) for cefixime, and the PK profiles were simulated from external sources. |
| popPK | Mohammed_2026 | irrelevant | 0 | 0 | The study describes a fluorescent sensing probe for detecting moxifloxacin and lists cefixime only as a chemical interferent; it contains no pharmacokinetic data or disposition parameters for cefixime. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey of medication use and safety in breastfeeding women, not a pharmacokinetic study, and contains no quantitative PK parameters for cefixime. |
| popPK | Nakijoba_2025_2 | irrelevant | 0 | 0 | The paper is an epidemiological survey of medicine use during breastfeeding and does not report quantitative pharmacokinetic parameters for cefixime. |
| PGx | Niwa_2004 | not_relevant | 0 | 0 | The study investigates drug-drug interaction potential via CYP inhibition in pooled microsomes and does not involve genetic variants or pharmacogenomics. |
| popPK | Pérez-Blanco_2022 | irrelevant | 0 | 0 | This is a special issue introduction/overview that mentions cefixime only in the context of a PK/PD study on gonorrhea treatment, without reporting specific population PK parameters or numeric values for cefixime itself. |
| popPK | Quilter_2021 | irrelevant | 0 | 0 | The paper reports antimicrobial susceptibility (MIC) data for N. gonorrhoeae, not pharmacokinetic parameters for cefixime. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | The paper is a review of chitosan-based hydrogels and contains no pharmacokinetic data or parameters for cefixime. |
| PGx | Shimuta_2022 | not_relevant | 0 | 0 | The paper describes a diagnostic assay to detect bacterial penA mutations that affect drug susceptibility, not a human pharmacogenomic effect on PK/PD. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | The paper reports antibiotic susceptibility profiles (MICs) for bacteria, not pharmacokinetic parameters for cefixime. |
| popPK | Unemo_2024 | irrelevant | 0 | 0 | The paper describes the characterization of Neisseria gonorrhoeae reference strains for antimicrobial resistance surveillance, containing MIC and genomic data but no pharmacokinetic parameters for cefixime. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not cefixime. |
| popPK | Whittles_2017 | irrelevant | 0 | 0 | The paper is an epidemiological modeling study of Neisseria gonorrhoeae resistance dynamics, not a pharmacokinetic study of the drug cefixime. |
| popPK | Yano_1991 | relevant | 8 | 4 | The study reports quantitative disposition parameters (partition ratio, volume of blood space, irreversible transfer rate) for cefixime in a rat liver perfusion system, which is a valid in-vivo pharmacokinetic model, though not a systemic population PK model. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not study cefixime or report any pharmacokinetic parameters for it. |
| popPK | Zhong_2024 | irrelevant | 0 | 0 | The paper is a Monte Carlo simulation using literature-derived PK parameters, but it reports no original quantitative PK parameter values for cefixime (CL, Vd, etc.) in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:52 UTC</sub>
