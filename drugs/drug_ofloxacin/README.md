<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;ofloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofloxacin_AlShaer2019_reference&quot;,&quot;label&quot;:&quot;Al-Shaer_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/Ofloxacin_AlShaer2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ofloxacin_Zhuo1994_reference&quot;,&quot;label&quot;:&quot;Zhuo_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/Ofloxacin_Zhuo1994_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ofloxacin

- **generic name:** ofloxacin
- **ATC codes:** `J01MA01`, `J01RA09`, `J01RA17`, `J01RA18`, `S01AE01`, `S02AA16`
- **DrugBank:** [DB01165](https://go.drugbank.com/drugs/DB01165) · **PubChem:** [CID 4583](https://pubchem.ncbi.nlm.nih.gov/compound/4583)
- **molar mass:** 361.3675 g/mol (C18H20FN3O4) — DrugBank
- **groups:** approved, investigational

## About

Ofloxacin is a fluoroquinolone antibiotic used to treat bacterial infections such as urinary tract infections, gonorrhea, chlamydia, prostatitis, otitis, and eye infections. It is an approved medicine, appears on the WHO essential medicines list, and is used widely, both by mouth and as eye or ear drops.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411447](https://www.wikidata.org/wiki/Q411447) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ofloxacin | parent | 361.368 | C18H20FN3O4 | DrugBank | [4583](https://pubchem.ncbi.nlm.nih.gov/compound/4583) | Fillastre_1987, Zhuo_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:44 | 6:28 | 2/1/6 | 1/0/0 | 0/0/0 | 322,408/29,430 | einfracz / qwen3.8-27b | 22 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Al-Shaer_2019_reference](drugs/drug_ofloxacin/Ofloxacin_AlShaer2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Al-Shaer MH et al., Fluoroquinolones in Drug-Resistant Tube…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00279-19](https://doi.org/10.1128/AAC.00279-19) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhuo_1994_reference](drugs/drug_ofloxacin/Ofloxacin_Zhuo1994_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Zhuo HT et al., Pharmacokinetics of ofloxacin through t…, Zhongguo yao li xue bao = A… (1994) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q27, Q26 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Fillastre_1987_group_i](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_group_i.md) | — | 1-compartment (no model) | 9 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q27, Q26 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Fillastre_1987_group_ii](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_group_ii.md) | — | 1-compartment (no model) | 9 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q27, Q26 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Fillastre_1987_group_iii](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_group_iii.md) | — | 1-compartment (no model) | 9 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Fillastre_1987_group_iv](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_group_iv.md) | — | 1-compartment (no model) | 7 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q26 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Fillastre_1987_normal](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_normal.md) | — | 1-compartment (no model) | 8 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Fillastre_1987_reference](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_reference.md) | — | — (no model) | 0 | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lode_1988_reference](drugs/drug_ofloxacin/Ofloxacin_Lode1988_reference.md) | — | 1-compartment (no model) | 0 | Lode H et al., Comparative pharmacokinetics of intrave…, The Journal of antimicrobia… (1988) | [10.1093/jac/22.supplement_c.73](https://doi.org/10.1093/jac/22.supplement_c.73) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Lopez_2021_nitrification_activity](drugs/drug_ofloxacin/pd_Lopez_2021_nitrification_activity.md) | nitrification activity ← ofloxacin · direct linear effect | — | Lopez C et al., Pharmaceuticals and personal care produ…, Environmental science and p… (2021) | [10.1007/s11356-021-14696-7](https://doi.org/10.1007/s11356-021-14696-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ofloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 9  ·  extracted 2  ·  needs_review 5  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lode_1988.pdf` | Lode H et al., Comparative pharmacokinetics of intrave…, The Journal of antimicrobia… (1988) | popPK | 10 | [10.1093/jac/22.supplement_c.73](https://doi.org/10.1093/jac/22.supplement_c.73) | [3182465](https://pubmed.ncbi.nlm.nih.gov/3182465) | The text provides specific quantitative PK parameters (volume of distribution, renal/extrarenal elimination percentages, half-life description) for ofloxacin in a three-compartment model, although full table values for CL and ka are not explicitly listed. |
| `Stambaugh_2002.pdf` | Stambaugh JJ et al., Ofloxacin population pharmacokinetics i…, The international journal o… (2002) | popPK | 10 | [10.5588/09640569513011](https://doi.org/10.5588/09640569513011) | [12068983](https://pubmed.ncbi.nlm.nih.gov/12068983) | The paper reports on a population PK study of ofloxacin, but the provided abstract only contains qualitative descriptions (e.g., "concentrations increased linearly") and lacks specific numeric parameter values (CL, V, ka, etc.). |
| `Zhuo_1994.pdf` | Zhuo HT et al., Pharmacokinetics of ofloxacin through t…, Zhongguo yao li xue bao = A… (1994) | popPK | 10 | not captured | [7717063](https://pubmed.ncbi.nlm.nih.gov/7717063) | The paper reports specific quantitative pharmacokinetic parameters (CL, V, T1/2, etc.) for ofloxacin in humans, and all numeric values are present in the evidence. |
| `Nix_1997.pdf` | Nix DE et al., Pharmacodynamic modeling of the in vivo…, Antimicrobial agents and ch… (1997) | popPK | 9 | [10.1128/AAC.41.5.1108](https://doi.org/10.1128/AAC.41.5.1108) | [9145877](https://pubmed.ncbi.nlm.nih.gov/9145877) | The study reports quantitative pharmacokinetic parameters (clearance and volume of distribution) for ofloxacin in healthy adults, with specific numeric values provided in the text. |
| `Mukherjee_2025.pdf` | Mukherjee A et al., Pharmacokinetic-Pharmacodynamic (PK-PD)…, Indian journal of pediatrics (2025) | popPK | 7 | [10.1007/s12098-024-05135-9](https://doi.org/10.1007/s12098-024-05135-9) | [38802673](https://pubmed.ncbi.nlm.nih.gov/38802673) | The paper is a PK-PD study of ofloxacin in children, but the provided abstract contains no specific numeric PK parameter values (CL, V, ka, etc.) for ofloxacin, only qualitative descriptions of Cmax/AUC targets. |
| `Lu_2000.pdf` | Lu Y et al., [Antituberculosis effect of levofloxaci…, Zhonghua jie he he hu xi za… (2000) | popPK | 6 | not captured | [11778184](https://pubmed.ncbi.nlm.nih.gov/11778184) | The study reports a one-compartment PK model for ofloxacin in humans, but the specific numeric parameter values are not provided in the extracted evidence. |

<sub>queue written 2026-10-07T11:38:33.749916+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Shaer_2019 | irrelevant | 0 | 0 | The study develops population pharmacokinetic models only for levofloxacin and moxifloxacin; ofloxacin is included only as a comparator in the clinical efficacy analysis without reported PK parameter values. |
| popPK | Danner_2021 | irrelevant | 0 | 0 | This is an in-vitro ecotoxicology study measuring antibiotic efficacy (MIC, EC50) on bacteria, not a pharmacokinetic study of ofloxacin disposition. |
| popPK | Jaruratanasirikul_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levofloxacin, not ofloxacin. |
| popPK | Kozjek_1999 | irrelevant | 2 | 0 | The study focuses on saliva-to-plasma ratios and reports no quantitative disposition parameters (CL, V, ka, t1/2) for ofloxacin, with numeric PK values likely omitted or in the full text not provided. |
| popPK | Lopez_2021 | irrelevant | 0 | 0 | The paper is an ecological toxicity study measuring the inhibition of nitrifying bacteria by ofloxacin (EC50), not a pharmacokinetic study reporting disposition parameters for ofloxacin. |
| popPK | Lu_2000 | relevant | 6 | 0 | The study reports a one-compartment PK model for ofloxacin in humans, but the specific numeric parameter values are not provided in the extracted evidence. |
| popPK | Mimram_2026 | irrelevant | 2 | 0 | The study is a model-informed precision dosing application for levofloxacin; while it reviews ofloxacin models, it does not report original quantitative PK parameter values for ofloxacin in the provided evidence. |
| popPK | Mukherjee_2025 | relevant | 7 | 0 | The paper is a PK-PD study of ofloxacin in children, but the provided abstract contains no specific numeric PK parameter values (CL, V, ka, etc.) for ofloxacin, only qualitative descriptions of Cmax/AUC targets. |
| popPK | Noreddin_2009 | irrelevant | 1 | 0 | The study is an in vitro pharmacodynamic simulation using a bioreactor to test antibiotic efficacy, not a study measuring in vivo disposition parameters (CL, V) for ofloxacin. |
| popPK | Pauletto_2024 | irrelevant | 0 | 0 | This is an ecotoxicology review of fluoroquinolones in freshwater environments, not a pharmacokinetic study; it reports environmental concentrations and toxicity data (EC50) rather than disposition parameters like clearance or volume. |
| popPK | Robinson_2005 | irrelevant | 0 | 0 | The study reports toxicology data (EC50, NOEC) for ofloxacin in aquatic organisms, not pharmacokinetic parameters. |
| popPK | Sakai_2019 | relevant | 3 | 8 | The study reports non-compartmental PK parameters (Cmax, Tmax, AUC) for ofloxacin in rabbit ocular tissues, but ofloxacin serves as a comparator to the subject drug azithromycin and no compartmental model parameters (CL, V, Q, ka) are reported. |
| popPK | Stambaugh_2002 | relevant | 10 | 2 | The paper reports on a population PK study of ofloxacin, but the provided abstract only contains qualitative descriptions (e.g., "concentrations increased linearly") and lacks specific numeric parameter values (CL, V, ka, etc.). |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study investigates phage-antibiotic synergy and survival rates in infection models, not the pharmacokinetic disposition parameters (CL, V, ka) of ofloxacin. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of danofloxacin (not ofloxacin) in chickens, where ofloxacin is used only as a comparator for MIC resistance determination. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:38 UTC</sub>
