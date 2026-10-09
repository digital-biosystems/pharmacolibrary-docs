<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Midomafetamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Midomafetamine_Baggott2016_reference&quot;,&quot;label&quot;:&quot;Baggott_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Baggott2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_Hampsey2026_reference&quot;,&quot;label&quot;:&quot;Hampsey_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Hampsey2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_chov2025_reference&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_chov2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Midomafetamine

- **generic name:** Midomafetamine
- **ATC codes:** not captured
- **DrugBank:** [DB01454](https://go.drugbank.com/drugs/DB01454) · **PubChem:** [CID 1615](https://pubchem.ncbi.nlm.nih.gov/compound/1615)
- **molar mass:** 193.2423 g/mol (C11H15NO2) — DrugBank
- **groups:** illicit, investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| MDMA | parent | 193.242 | C11H15NO2 | DrugBank | [1615](https://pubchem.ncbi.nlm.nih.gov/compound/1615) | Huestis_2025 |
| MDA | metabolite | 179.219 | C10H13NO2 | PubChem | [1614](https://pubchem.ncbi.nlm.nih.gov/compound/1614) | Huestis_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 08:36 | 26:15 | 3/1/0 | 1/1/0 | 0/0/0 | 726,539/48,169 | einfracz / qwen3.8-27b | 18 | 4/14 | 18/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baggott_2016_reference](drugs/drug_midomafetamine/Midomafetamine_Baggott2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Baggott MJ et al., MDMA Impairs Response to Water Intake i…, Advances in pharmacological… (2016) | [10.1155/2016/2175896](https://doi.org/10.1155/2016/2175896) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hampsey_2026_reference](drugs/drug_midomafetamine/Midomafetamine_Hampsey2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Hampsey E et al., A systematic review of the pharmacokine…, Journal of psychopharmacolo… (2026) | [10.1177/02698811261453938](https://doi.org/10.1177/02698811261453938) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Šíchová_2025_reference](drugs/drug_midomafetamine/Midomafetamine_chov2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Šíchová K et al., Hexahydrocannabinol: pharmacokinetics,…, The international journal o… (2025) | [10.1093/ijnp/pyaf041](https://doi.org/10.1093/ijnp/pyaf041) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Huestis_2025_reference](drugs/drug_midomafetamine/Midomafetamine_Huestis2025_reference.md) | — | parent + metabolite (no model) | 7 (+4 cov.) | Huestis MA et al., MDMA pharmacokinetics: A population and…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13282](https://doi.org/10.1002/psp4.13282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Araújo_2015_hepatotoxic_effects](drugs/drug_midomafetamine/pd_Ara_jo_2015_hepatotoxic_effects.md) | hepatotoxic effects ← MDMA · direct Emax (saturable) effect | — | Araújo AM et al., Raising awareness of new psychoactive s…, Archives of toxicology (2015) | [10.1007/s00204-014-1278-7](https://doi.org/10.1007/s00204-014-1278-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Acosta_2025_computational_time](drugs/drug_midomafetamine/pd_Acosta_2025_computational_time.md) | computational time · model not identified | — | Acosta Murillo R et al., Benchmarking Molecular Mutation Operato…, International journal of mo… (2025) | [10.3390/ijms262311685](https://doi.org/10.3390/ijms262311685) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Acosta_2025_molecular_complexity](drugs/drug_midomafetamine/pd_Acosta_2025_molecular_complexity.md) | molecular complexity · model not identified | — | Acosta Murillo R et al., Benchmarking Molecular Mutation Operato…, International journal of mo… (2025) | [10.3390/ijms262311685](https://doi.org/10.3390/ijms262311685) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Acosta_2025_molecular_validity](drugs/drug_midomafetamine/pd_Acosta_2025_molecular_validity.md) | molecular validity · model not identified | — | Acosta Murillo R et al., Benchmarking Molecular Mutation Operato…, International journal of mo… (2025) | [10.3390/ijms262311685](https://doi.org/10.3390/ijms262311685) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Acosta_2025_pIC50](drugs/drug_midomafetamine/pd_Acosta_2025_pIC50.md) | pIC50 · model not identified | — | Acosta Murillo R et al., Benchmarking Molecular Mutation Operato…, International journal of mo… (2025) | [10.3390/ijms262311685](https://doi.org/10.3390/ijms262311685) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Acosta_2025_structural_conservation](drugs/drug_midomafetamine/pd_Acosta_2025_structural_conservation.md) | structural conservation · model not identified | — | Acosta Murillo R et al., Benchmarking Molecular Mutation Operato…, International journal of mo… (2025) | [10.3390/ijms262311685](https://doi.org/10.3390/ijms262311685) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=midomafetamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` negative modulator/unknown | DrugBank actor |
| — | platelet | `SLC6A4` negative modulator/unknown | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), HTR2B (target), HTR2C (target), SLC18A2 (inhibitor), SLC6A2 (negative modulator), SLC6A2 (unknown), SLC6A3 (negative modulator), SLC6A3 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 450 matched, 95 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baumann_2004.pdf` | Baumann MH et al., Effects of "Legal X" piperazine analogs…, Annals of the New York Acad… (2004) | pd | 4 | [10.1196/annals.1316.024](https://doi.org/10.1196/annals.1316.024) | [15542717](https://www.ncbi.nlm.nih.gov/pubmed/15542717) | metadata signals extractable PD data (EC50) |
| `Saadat_2006.pdf` | Saadat KS et al., The acute and long-term neurotoxic effe…, Journal of psychopharmacolo… (2006) | pd | 4 | [10.1177/0269881106058022](https://doi.org/10.1177/0269881106058022) | [16510484](https://www.ncbi.nlm.nih.gov/pubmed/16510484) | metadata signals extractable PD data (EC50) |
| `Sprouse_1989.pdf` | Sprouse JS et al., MDMA (3,4-methylenedioxymethamphetamine…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90446-9](https://doi.org/10.1016/0014-2999(89)90446-9) | [2572435](https://www.ncbi.nlm.nih.gov/pubmed/2572435) | metadata signals extractable PD data (IC50) |
| `OMathúna_2008.pdf` | O'Mathúna B et al., The consequences of 3,4-methylenedioxym…, Journal of clinical psychop… (2008) | pgx | 8 | [10.1097/JCP.0b013e318184ff6e](https://doi.org/10.1097/JCP.0b013e318184ff6e) | [18794647](https://www.ncbi.nlm.nih.gov/pubmed/18794647) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Schifano_2004.pdf` | Schifano F, A bitter pill. Overview of ecstasy (MDM…, Psychopharmacology (2004) | pgx | 8 | [10.1007/s00213-003-1730-5](https://doi.org/10.1007/s00213-003-1730-5) | [14673568](https://www.ncbi.nlm.nih.gov/pubmed/14673568) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `de_2005.pdf` | de la Torre R et al., MDMA (ecstasy) pharmacokinetics in a CY…, European journal of clinica… (2005) | pgx | 8 | [10.1007/s00228-005-0965-y](https://doi.org/10.1007/s00228-005-0965-y) | [16041599](https://www.ncbi.nlm.nih.gov/pubmed/16041599) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Bomsien_2007.pdf` | Bomsien S et al., An in vitro approach to potential metha…, European journal of clinica… (2007) | pgx | 7 | [10.1007/s00228-007-0327-z](https://doi.org/10.1007/s00228-007-0327-z) | [17598095](https://www.ncbi.nlm.nih.gov/pubmed/17598095) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Pal_2006.pdf` | Pal D et al., MDR- and CYP3A4-mediated drug-drug inte…, Journal of neuroimmune phar… (2006) | pgx | 7 | [10.1007/s11481-006-9034-2](https://doi.org/10.1007/s11481-006-9034-2) | [18040809](https://www.ncbi.nlm.nih.gov/pubmed/18040809) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Rodgers_2020.pdf` | Rodgers JT et al., Numerical Analysis of Time-Dependent In…, Drug metabolism and disposi… (2020) | pgx | 7 | [10.1124/dmd.119.089268](https://doi.org/10.1124/dmd.119.089268) | [31641009](https://www.ncbi.nlm.nih.gov/pubmed/31641009) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tucker_1994.pdf` | Tucker GT et al., The demethylenation of methylenedioxyme…, Biochemical pharmacology (1994) | pgx | 5 | [10.1016/0006-2952(94)90386-7](https://doi.org/10.1016/0006-2952(94)90386-7) | [7909223](https://www.ncbi.nlm.nih.gov/pubmed/7909223) | metadata signals extractable PGX data (CYP2D6) |
| `Zwartsen_2019.pdf` | Zwartsen A et al., Differential effects of psychoactive su…, Toxicology (2019) | pgx | 5 | [10.1016/j.tox.2019.04.012](https://doi.org/10.1016/j.tox.2019.04.012) | [31009648](https://www.ncbi.nlm.nih.gov/pubmed/31009648) | metadata signals extractable PGX data (SLC6A3) |

<sub>queue written 2026-10-09T08:21:41.332649+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abad_2016 | not_relevant | 0 | 0 | The paper studies the neurotoxic effects of MDMA in a mouse model of Alzheimer's disease and does not involve midomafetamine or any pharmacogenomic analysis. |
| popPK | Aboharb_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study using machine learning to classify c-Fos expression in mouse brains after dosing with various psychedelics (psilocybin, ketamine, MDMA, etc.), and does not study midomafetamine or report pharmacokinetic parameters. |
| popPK | Acosta_2025 | irrelevant | 0 | 0 | The paper is a computational chemistry study on molecular mutation operators for drug design and does not involve pharmacokinetics or the drug midomafetamine. |
| popPK | Araújo_2015 | irrelevant | 0 | 0 | The study is an in vitro toxicology and chemical analysis of synthetic cathinones (methylone, MDPV, etc.) and does not involve midomafetamine or report any pharmacokinetic parameters. |
| popPK | Atila_2023 | irrelevant | 0 | 0 | The study investigates oxytocin response to MDMA in diabetes insipidus patients and does not involve midomafetamine or its pharmacokinetics. |
| popPK | Atila_2025 | irrelevant | 0 | 0 | The study investigates oxytocin and neurophysin I biomarkers in the context of MDMA administration, not the pharmacokinetics of midomafetamine. |
| popPK | Baggott_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MDMA (3,4-methylenedioxymethamphetamine), not midomafetamine. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | The paper is a review of computational toxicity prediction models and does not contain any pharmacokinetic data or parameters for midomafetamine. |
| popPK | Baumann_2004 | irrelevant | 0 | 0 | The study focuses on the neurochemical effects of MDMA and piperazine analogs (BZP, TFMPP) and does not involve midomafetamine or report pharmacokinetic parameters. |
| PGx | Bomsien_2007 | not_relevant | 0 | 0 | The paper focuses on in vitro interactions with methadone and does not involve midomafetamine or report pharmacogenomic effects. |
| PGx | Capela_2009 | not_relevant | 0 | 0 | The paper is a review on the neurotoxicity mechanisms of MDMA, not midomafetamine, and does not report pharmacogenomic effects on PK or PD parameters for midomafetamine. |
| popPK | Cleary_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study on rat cardiac tissue focusing on amphetamine derivatives and cathinone, with no pharmacokinetic data for midomafetamine. |
| popPK | Cleary_2003 | irrelevant | 0 | 0 | The paper studies the actions of amphetamine derivatives (MDMA, MDA, etc.) on the noradrenaline transporter, not midomafetamine, and contains no pharmacokinetic parameters. |
| PGx | Colado_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of MDMA/MDA, not midomafetamine. |
| popPK | Corkery_2022 | irrelevant | 0 | 0 | The paper is a review of 4-fluoroethylphenidate, not a pharmacokinetic study of midomafetamine. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The text discusses midomafetamine's approval and efficacy but contains no data or discussion regarding pharmacogenomic variants affecting its PK or PD parameters. |
| popPK | Fischer_2000 | irrelevant | 0 | 0 | The study investigates the mechanism of action (acetylcholine release) of MDMA in rat brain slices in vitro and does not report pharmacokinetic parameters for midomafetamine. |
| popPK | Giannaccini_2007 | irrelevant | 0 | 0 | The study investigates the pharmacology of MDMA (ecstasy) in rat brain tissue and does not involve the drug midomafetamine. |
| PGx | Granado_2011 | not_relevant | 0 | 0 | The paper studies the neurotoxicity of methamphetamine and MDMA, not midomafetamine. |
| popPK | Gómez-Núñez_2023 | irrelevant | 0 | 0 | The paper is a systematic review on sexual risk behavior and does not contain pharmacokinetic data for midomafetamine. |
| popPK | Hampsey_2026 | irrelevant | 0 | 0 | The paper is a systematic review of LSD, psilocybin, DMT, mescaline, and 5-MEO-DMT, and does not study or report pharmacokinetic parameters for midomafetamine. |
| popPK | Hastings_2026 | irrelevant | 0 | 0 | The paper is a bibliometric study analyzing trends in mental health literature and contains no pharmacokinetic data or parameters for midomafetamine. |
| PGx | Heydari_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism-based inactivation of CYP2D6 by MDMA, not the pharmacogenomics or PK/PD of midomafetamine. |
| popPK | Hirt_2010 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of MDMA (Ecstasy) and its metabolites, not midomafetamine. |
| PGx | Huestis_2025 | not_relevant | 1 | 0 | The paper models the pharmacokinetics of midomafetamine (MDMA) and its drug-drug interactions via CYP2D6 inhibition, but it does not report an association between a specific CYP2D6 genotype (or other gene variant) and the PK parameters of the drug itself. |
| PGx | Keizers_2004 | not_relevant | 0 | 0 | The paper studies CYP2D6 metabolism of MAMC, dextromethorphan, and MDMA, but does not mention midomafetamine. |
| popPK | Kuypers_2016 | irrelevant | 0 | 0 | The study is a neuropsychological analysis of verbal memory in MDMA users and does not report any pharmacokinetic parameters for midomafetamine. |
| PGx | Liechti_2022 | not_relevant | 0 | 0 | The text discusses general dosing of psychedelics and MDMA but does not mention midomafetamine or any specific pharmacogenomic effects. |
| PGx | Livezey_2012 | not_relevant | 0 | 0 | The paper investigates CYP2D6 inactivation by other compounds (paroxetine, MDMA, etc.) and does not mention or analyze midomafetamine. |
| popPK | Llabrés_2014 | irrelevant | 0 | 0 | The paper studies the pharmacology and synthesis of MDMA, not the pharmacokinetics of midomafetamine. |
| popPK | Martínez-Clemente_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mephedrone, not midomafetamine. |
| PGx | Maurer_2000 | not_relevant | 0 | 0 | The paper discusses the toxicokinetics of amphetamine-derived designer drugs (MDA, MDMA, MDE, BDB, MBDB) and does not mention midomafetamine. |
| popPK | Murphy_2002 | irrelevant | 0 | 0 | The paper is an in vitro study on serotonin signaling and does not involve midomafetamine or report any pharmacokinetic parameters. |
| PGx | OMathúna_2008 | not_relevant | 0 | 0 | The paper investigates MDMA-induced CYP2D6 inhibition and does not mention or study midomafetamine. |
| PGx | Pal_2006 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions involving HIV drugs and does not mention midomafetamine or any specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Papaseit_2018 | not_relevant | 0 | 0 | The paper discusses MDMA (3,4-methylenedioxymethamphetamine) and does not mention midomafetamine. |
| PGx | Papaseit_2020 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (pharmaceuticals/drugs of abuse) with MDMA and does not discuss pharmacogenomic effects of gene variants on MDMA pharmacokinetics/pharmacodynamics. |
| PGx | Pedersen_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and metabolism of mephedrone, not midomafetamine. |
| PGx | Perfetti_2009 | not_relevant | 0 | 0 | The paper studies the pharmacology of MDMA (Ecstasy), not midomafetamine. |
| popPK | Pitts_2017 | irrelevant | 0 | 0 | The study investigates the behavioral and neurochemical mechanisms of MDMA in squirrel monkeys, not the pharmacokinetics of midomafetamine. |
| PGx | Pritzker_2002 | not_relevant | 0 | 0 | The paper discusses CYP2D6 inhibition by MPPP and PEPAP, not midomafetamine, and does not report pharmacogenomic effects. |
| PGx | Rodgers_2020 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of MDMA (3,4-methylenedioxymethamphetamine), whereas the query specifically asks about midomafetamine. |
| popPK | Roque_2021 | irrelevant | 0 | 0 | The study focuses on in vitro hepatotoxicity of other cathinones (buphedrone, butylone, 3,4-DMMC) and does not involve midomafetamine or pharmacokinetic parameters. |
| PGx | Roque_2021 | not_relevant | 0 | 0 | The paper investigates the hepatotoxicity of synthetic cathinones (buphedrone, butylone, 3,4-DMMC) and makes no mention of midomafetamine or pharmacogenomics. |
| popPK | Saadat_2006 | irrelevant | 0 | 0 | The study investigates the neurotoxic and behavioral effects of MDMA in mice and contains no pharmacokinetic parameters or data for midomafetamine. |
| PGx | Schifano_2004 | not_relevant | 3 | 1 | The paper discusses pharmacogenomics of MDMA (CYP2D6/COMT), not midomafetamine, and provides no quantitative effect sizes. |
| popPK | Seaton_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and prevention efficacy of VRC01 (an anti-HIV antibody), not midomafetamine. |
| popPK | Shariati_2017 | irrelevant | 0 | 0 | The paper is a longitudinal cohort study of smoking behaviors in gay and bisexual men, with no data on midomafetamine pharmacokinetics. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper reviews topiramate in substance-related disorders and does not mention midomafetamine or any pharmacogenomic effects. |
| PGx | Stolbach_2015 | not_relevant | 0 | 0 | The paper discusses antiretroviral drug-drug interactions and CYP pharmacology, but does not mention midomafetamine or its pharmacokinetic/pharmacodynamic properties. |
| PGx | Studerus_2021 | not_relevant | 2 | 1 | The paper investigates the pharmacokinetics of MDMA, but midomafetamine is a different drug and is not discussed or analyzed in this study. |
| PGx | Thibaut_2019 | not_relevant | 0 | 0 | The paper is a general review on future paths in psychopharmacology and does not report on midomafetamine or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Tucker_1994 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of MDMA, not midomafetamine. |
| popPK | Urban_2012 | irrelevant | 0 | 0 | The paper is a PET imaging study of MDMA users, not a PK study of midomafetamine, and contains no midomafetamine data. |
| PGx | Zwartsen_2019 | not_relevant | 0 | 0 | The paper focuses on the interaction between psychoactive substances (not specifically midomafetamine) and DAT genotypes, rather than reporting midomafetamine PK/PD parameters. |
| PGx | de_2004 | not_relevant | 0 | 0 | The paper focuses on the pharmacology and pharmacogenomics of MDMA (not midomafetamine) and does not report any pharmacokinetic or pharmacodynamic parameters for midomafetamine. |
| PGx | de_2004_2 | not_relevant | 0 | 0 | The paper discusses the neurotoxicity of MDMA (ecstasy), not midomafetamine. |
| PGx | de_2005 | not_relevant | 0 | 0 | The paper analyzes MDMA, not midomafetamine. |
| popPK | Šíchová_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hexahydrocannabinol (HHC), not midomafetamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 08:22 UTC</sub>
