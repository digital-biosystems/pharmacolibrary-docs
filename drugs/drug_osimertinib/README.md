<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# osimertinib

- **generic name:** osimertinib
- **ATC codes:** `L01EB04`, `L01XE`
- **DrugBank:** [DB09330](https://go.drugbank.com/drugs/DB09330) · **PubChem:** [CID 71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458)
- **molar mass:** 499.619 g/mol (C28H33N7O2) — DrugBank
- **groups:** approved, investigational

## About

Osimertinib is a third-generation EGFR tyrosine kinase inhibitor used to treat non-small-cell lung cancer with a specific mutation. It is approved and authorised in the European Union for non-small-cell lung carcinoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21506464](https://www.wikidata.org/wiki/Q21506464) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| osimertinib | parent | 499.619 | C28H33N7O2 | DrugBank | [71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458) | Johnson_2025, Jones_2023, Rodier_2022, Westra_2025, Yang_2025 |
| AZ5104 (osimertinib and AZ5104) | metabolite | 485.592 | C27H31N7O2 | PubChem | [71496460](https://pubchem.ncbi.nlm.nih.gov/compound/71496460) | Johnson_2025, Jones_2023, Westra_2025, Yang_2025 |
| AZ7550 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:07 | 20:55 | 3/2/1 | 4/0/4 | 0/0/0 | 415,433/110,837 | openai / gpt-6-luna | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_reference](drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodier_2022_reference](drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Westra_2025_reference](drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md) | ▶ model + simulator | parent 1-cmt + 1 metabolite (1-cmt) | 7 | Westra N et al., Osimertinib Cost Minimization in Non-Sm…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Johnson_2025_reference](drugs/drug_osimertinib/Osimertinib_Johnson2025_reference.md) | — | parent + metabolite (no model) | 6 (+7 cov.) | Johnson M et al., Population Pharmacokinetics of Osimerti…, Pharmacology research & per… (2025) | [10.1002/prp2.70098](https://doi.org/10.1002/prp2.70098) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Westra_2024_reference](drugs/drug_osimertinib/Osimertinib_Westra2024_reference.md) | — | general linear (no model) | 0 | Westra N et al., Systematic Evaluation of Osimertinib Po…, European journal of drug me… (2024) | [10.1007/s13318-024-00904-5](https://doi.org/10.1007/s13318-024-00904-5) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_reference](drugs/drug_osimertinib/Osimertinib_Yang2025_reference.md) | — | parent + metabolite (no model) | 8 (+3 cov.) | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brown_2017_QTcF](drugs/drug_osimertinib/pd_Brown_2017_QTcF.md) | QTcF ← osimertinib · direct linear effect | — | Brown K et al., Population pharmacokinetics and exposur…, British journal of clinical… (2017) | [10.1111/bcp.13223](https://doi.org/10.1111/bcp.13223) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hu_2026_EGFR](drugs/drug_osimertinib/pd_Hu_2026_EGFR.md) | pEGFR/EGFR ← osimertinib (OSI) · direct sigmoid Emax (Hill) effect | — | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_TGI](drugs/drug_osimertinib/pd_Jones_2023_TGI.md) | Tumor growth ← osimertinib and savolitinib · disease-progression model | model (no simulator) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pEGFR](drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md) | pEGFR ← osimertinib · indirect response — drug stimulates the loss of pEGFR | model (no simulator) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span> | [Savoca_2026_phosEGFR](drugs/drug_osimertinib/pd_Savoca_2026_phosEGFR.md) | phosphorylated EGFR ← osimertinib · indirect response — drug inhibits the production of phosphorylated EGFR | — | Savoca A et al., Preclinical to clinical translation of…, Molecular cancer therapeuti… (2026) | [10.1158/1535-7163.MCT-25-0082](https://doi.org/10.1158/1535-7163.MCT-25-0082) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Boosman_2022_PFS](drugs/drug_osimertinib/pd_Boosman_2022_PFS.md) | progression free survival ← osimertinib · time-to-event model | — | Boosman RJ et al., Exposure-Response Analysis of Osimertin…, Pharmaceutical research (2022) | [10.1007/s11095-022-03355-2](https://doi.org/10.1007/s11095-022-03355-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Brown_2017_diarrhoea](drugs/drug_osimertinib/pd_Brown_2017_diarrhoea.md) | diarrhoea ← osimertinib · categorical (graded) response model | — | Brown K et al., Population pharmacokinetics and exposur…, British journal of clinical… (2017) | [10.1111/bcp.13223](https://doi.org/10.1111/bcp.13223) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Brown_2017_rash](drugs/drug_osimertinib/pd_Brown_2017_rash.md) | rash ← osimertinib · categorical (graded) response model | — | Brown K et al., Population pharmacokinetics and exposur…, British journal of clinical… (2017) | [10.1111/bcp.13223](https://doi.org/10.1111/bcp.13223) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Johnson_2024_ILD](drugs/drug_osimertinib/pd_Johnson_2024_ILD.md) | ILD-like events ← osimertinib · categorical (graded) response model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Johnson_2024_LVEF](drugs/drug_osimertinib/pd_Johnson_2024_LVEF.md) | LVEF events ← osimertinib · categorical (graded) response model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Johnson_2024_PFS](drugs/drug_osimertinib/pd_Johnson_2024_PFS.md) | Progression-free survival ← osimertinib · time-to-event model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodier_2022_OS](drugs/drug_osimertinib/pd_Rodier_2022_OS.md) | Overall survival ← osimertinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodier_2022_PFS](drugs/drug_osimertinib/pd_Rodier_2022_PFS.md) | Progression-free survival ← osimertinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs](drugs/drug_osimertinib/pd_Yang_2025_AEs.md) | CTCAE Grade ≥3 AEs causally related to osimertinib ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs_2](drugs/drug_osimertinib/pd_Yang_2025_AEs_2.md) | cardiac effects including cardiac failure ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs_3](drugs/drug_osimertinib/pd_Yang_2025_AEs_3.md) | CTCAE Grade ≥3 hematological toxicities including anemia, neutropenia, and thrombocytopenia ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs_4](drugs/drug_osimertinib/pd_Yang_2025_AEs_4.md) | AEs leading to osimertinib dose interruptions ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs_5](drugs/drug_osimertinib/pd_Yang_2025_AEs_5.md) | AEs leading to osimertinib dose reductions ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_AEs_6](drugs/drug_osimertinib/pd_Yang_2025_AEs_6.md) | AEs leading to study discontinuation ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_ILD_pneumonitis](drugs/drug_osimertinib/pd_Yang_2025_ILD_pneumonitis.md) | CTCAE Grade ≥1 ILD/pneumonitis ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_LVEF_decreased](drugs/drug_osimertinib/pd_Yang_2025_LVEF_decreased.md) | left ventricular ejection fraction decreased ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yang_2025_PFS](drugs/drug_osimertinib/pd_Yang_2025_PFS.md) | progression-free survival ← osimertinib · time-to-event model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hu_2026_Bim](drugs/drug_osimertinib/pd_Hu_2026_Bim.md) | Bim protein level ← osimertinib (OSI) · delayed effect through transit (transduction) compartments | — | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hu_2026_CL_PARP](drugs/drug_osimertinib/pd_Hu_2026_CL_PARP.md) | CL-PARP (apoptosis signal) ← osimertinib (OSI) · delayed effect through transit (transduction) compartments | — | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hu_2026_EGFR_2](drugs/drug_osimertinib/pd_Hu_2026_EGFR_2.md) | EGFR signaling ← osimertinib (OSI) · indirect response — drug stimulates the loss of EGFR signaling | — | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hu_2026_TGI](drugs/drug_osimertinib/pd_Hu_2026_TGI.md) | tumor volume ← osimertinib (OSI) · disease-progression model | — | Hu K et al., A Mechanistic Pharmacokinetic/Pharmacod…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040408](https://doi.org/10.3390/pharmaceutics18040408) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=osimertinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor), EGFR (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 3  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brown_2017.pdf` | Brown K et al., Population pharmacokinetics and exposur…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13223](https://doi.org/10.1111/bcp.13223) | [28009438](https://pubmed.ncbi.nlm.nih.gov/28009438) | A population PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 9 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | Human osimertinib PopPK models are reported, but no numeric disposition parameters are provided in the evidence. |
| `Grande_2019.pdf` | Grande E et al., Pharmacokinetic Study of Osimertinib in…, The Journal of pharmacology… (2019) | popPK | 7 | [10.1124/jpet.118.255919](https://doi.org/10.1124/jpet.118.255919) | [30872388](https://pubmed.ncbi.nlm.nih.gov/30872388) | The study includes a population-PK comparison, but the evidence gives exposure measures rather than numeric disposition parameters. |

<sub>queue written 2026-10-07T03:47:58.477914+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boosman_2022 | irrelevant | 2 | 0 | Reports osimertinib concentrations and exposure-response outcomes, but no quantitative disposition parameters or PK model. |
| popPK | Brown_2017 | relevant | 10 | 0 | A population PK model was developed, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Grande_2019 | relevant | 7 | 1 | The study includes a population-PK comparison, but the evidence gives exposure measures rather than numeric disposition parameters. |
| popPK | Hu_2026 | relevant | 9 | 2 | The study fits osimertinib PK in animals, but its numeric PK parameter values are referred to in supplementary tables/figures not provided. |
| popPK | Ishikawa_2023 | relevant | 10 | 2 | The human PopPK study reports osimertinib exposure values, but its numeric model parameters are only referenced in Table 2, which is not provided. |
| popPK | Johnson_2024 | irrelevant | 2 | 0 | This human exposure–response analysis uses clearance estimates from a prior population-PK analysis but reports no numeric osimertinib disposition parameters here. |
| popPK | Savoca_2026 | irrelevant | 1 | 0 | Osimertinib is discussed as a target-engagement example, with no quantitative disposition parameters reported. |
| popPK | Shao_2026 | irrelevant | 1 | 0 | This is a systematic review with no numeric osimertinib disposition parameters in the provided evidence. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | This reports patient-reported outcomes, not osimertinib pharmacokinetics or disposition parameters. |
| popPK | Yong_2025 | relevant | 9 | 0 | Human osimertinib PopPK models are reported, but no numeric disposition parameters are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:49 UTC</sub>
