<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;methylphenobarbital&quot;}]"></div>

# methylphenobarbital

- **generic name:** methylphenobarbital
- **ATC codes:** `N03AA01`
- **DrugBank:** [DB00849](https://go.drugbank.com/drugs/DB00849)
- **groups:** approved

## About

**Description.** A barbiturate that is metabolized to phenobarbital. It has been used for similar purposes, especially in epilepsy, but there is no evidence mephobarbital offers any advantage over phenobarbital.

**Indication.** For the relief of anxiety, tension, and apprehension, also used as an anticonvulsant for the treatment of epilepsy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:24 | 1:41 | 0/0/0 | 0/1/0 | 0/0/0 | 1,658/392 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/1 | 3/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Hamouda_2014](drugs/drug_methylphenobarbital/pd_Hamouda_2014_3H_ACh_binding.md) | Hamouda AK et al., Identifying barbiturate binding sites i…, Molecular pharmacology (2014) | [10.1124/mol.113.090985](https://doi.org/10.1124/mol.113.090985) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hamouda_2014](drugs/drug_methylphenobarbital/pd_Hamouda_2014_3H_tenocyclidine_binding.md) | Hamouda AK et al., Identifying barbiturate binding sites i…, Molecular pharmacology (2014) | [10.1124/mol.113.090985](https://doi.org/10.1124/mol.113.090985) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hamouda_2014](drugs/drug_methylphenobarbital/pd_Hamouda_2014_ACh_induced_currents.md) | Hamouda AK et al., Identifying barbiturate binding sites i…, Molecular pharmacology (2014) | [10.1124/mol.113.090985](https://doi.org/10.1124/mol.113.090985) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methylphenobarbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…y 50% of an oral dose of mephobarbital is absorbed from the gastrointestinal tract.…”</sub> | prose |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), NR1I2 (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_1989.pdf` | Lim WH et al., Stereoselective metabolism and pharmaco…, Drug metabolism and disposi… (1989) | popPK | 10 | not captured | [2565213](https://pubmed.ncbi.nlm.nih.gov/2565213) | The paper reports specific quantitative pharmacokinetic parameters (half-life and oral clearance) for methylphenobarbital enantiomers in humans directly in the text. |
| `Matsumoto_1988.pdf` | Matsumoto K et al., Action of polychlorocycloalkane insecti…, Toxicology and applied phar… (1988) | pd | 5 | [10.1016/0041-008x(88)90158-5](https://doi.org/10.1016/0041-008x(88)90158-5) | [2458634](https://www.ncbi.nlm.nih.gov/pubmed/2458634) | metadata signals extractable PD data (IC50) |
| `Daniell_1994.pdf` | Daniell LC, Effect of anesthetic and convulsant bar…, Pharmacology (1994) | pd | 4 | [10.1159/000139246](https://doi.org/10.1159/000139246) | [7862741](https://www.ncbi.nlm.nih.gov/pubmed/7862741) | metadata signals extractable PD data (IC50) |
| `Kobayashi_2004.pdf` | Kobayashi K et al., Pharmacogenetic roles of CYP2C19 and CY…, Pharmacogenetics (2004) | pgx | 8 | [10.1097/01.fpc.0000114764.78957.22](https://doi.org/10.1097/01.fpc.0000114764.78957.22) | [15284537](https://www.ncbi.nlm.nih.gov/pubmed/15284537) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kobayashi_2001.pdf` | Kobayashi K et al., Role of CYP2C19 in stereoselective hydr…, Drug metabolism and disposi… (2001) | pgx | 5 | not captured | [11124227](https://www.ncbi.nlm.nih.gov/pubmed/11124227) | metadata signals extractable PGX data (CYP2C19) |
| `Morita_2004.pdf` | Morita J et al., A novel single nucleotide polymorphism…, Drug metabolism and pharmac… (2004) | pgx | 5 | [10.2133/dmpk.19.236](https://doi.org/10.2133/dmpk.19.236) | [15499191](https://www.ncbi.nlm.nih.gov/pubmed/15499191) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-10T01:24:02.792394+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bialer_2025 | irrelevant | 0 | 0 | The paper is a review of chirality in antiseizure medications and does not report original quantitative pharmacokinetic parameters for methylphenobarbital. |
| PD | Bialer_2025 | not_relevant | 1 | 0 | The paper is a qualitative review of chirality in antiseizure medications and does not report specific numeric PD parameters or exposure-response data for methylphenobarbital. |
| PGx | Chang_2006 | not_relevant | 0 | 0 | The paper is a general review of cytochrome P450 catalytic assays and does not report specific pharmacogenomic effects on methylphenobarbital PK/PD parameters. |
| popPK | Chernev_1984 | irrelevant | 0 | 0 | The provided evidence contains only a title regarding drug interactions with oral contraceptives and lacks any pharmacokinetic data or parameters for methylphenobarbital. |
| PD | Chernev_1984 | not_relevant | 0 | 0 | The paper discusses drug interactions with oral contraceptives and does not report any pharmacodynamic or exposure-response analysis for methylphenobarbital. |
| popPK | Daniell_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor function in brain membrane vesicles and does not report pharmacokinetic parameters for methylphenobarbital. |
| popPK | Fletcher_1994 | irrelevant | 0 | 0 | The paper is a review discussing gender differences in pharmacokinetics and mentions mephobarbital (not methylphenobarbital) only as a qualitative example without providing any quantitative PK parameters. |
| PD | Fletcher_1994 | not_relevant | 0 | 0 | The text is a general review of gender differences in pharmacokinetics and pharmacodynamics and does not report any specific study, data, or numeric PD parameters for methylphenobarbital. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper investigates the metabolism of mephenytoin, not methylphenobarbital. |
| popPK | Hamouda_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study of barbiturate binding to nicotinic acetylcholine receptors in Torpedo membranes and Xenopus oocytes, not a pharmacokinetic study of methylphenobarbital. |
| PGx | Jacqz_1986 | not_relevant | 0 | 0 | The paper studies mephobarbital and mephenytoin, not methylphenobarbital. |
| PGx | Kalow_1989 | not_relevant | 0 | 0 | The paper discusses debrisoquine and mephenytoin polymorphisms and lists their substrates, but does not mention methylphenobarbital or report any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Kent_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of GABA receptor binding and anaesthetic potency in tadpoles, not the pharmacokinetic disposition parameters of methylphenobarbital. |
| PD | Kent_2019 | not_relevant | 0 | 0 | The paper focuses on the interaction of anaesthetic binding sites on GABA receptors using isobolographic analysis of mixtures, and does not report a pharmacokinetic or pharmacodynamic exposure-response model for methylphenobarbital. |
| PGx | Kobayashi_1999 | not_relevant | 0 | 0 | The paper identifies CYP2B6 as the enzyme responsible for S-mephobarbital metabolism but does not report any pharmacogenomic effects (e.g., genotype-phenotype correlations) on PK parameters. |
| PD | Lim_1989 | not_relevant | 0 | 0 | The paper reports stereoselective pharmacokinetics (clearance, half-life, metabolism) but explicitly states that pharmacodynamic implications are unclear and provides no concentration-effect or dose-response data. |
| popPK | Matsumoto_1988 | irrelevant | 0 | 0 | The paper is an in-vitro binding study on Torpedo membranes involving insecticides and barbiturates, not a pharmacokinetic study of methylphenobarbital. |
| PD | Matsumoto_1988 | not_relevant | 0 | 0 | The paper studies the binding of insecticides to Torpedo membranes and does not report any pharmacodynamic or exposure-response data for methylphenobarbital. |
| PGx | Niu_2011 | not_relevant | 0 | 0 | The paper uses computational docking to predict binding modes of substrates to CYP2B6 and does not report pharmacogenomic effects on PK/PD parameters for methylphenobarbital. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of brivaracetam, and methylphenobarbital is only mentioned as a concomitant medication with no PK parameters reported for it. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not methylphenobarbital, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sato_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for methylphenobarbital. |
| PD | Sato_1983 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding methylphenobarbital or pharmacodynamics. |
| popPK | Savechenkov_2012 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro pharmacological characterization of a novel barbiturate derivative, not the pharmacokinetics of methylphenobarbital. |
| popPK | Verpooten_1982 | irrelevant | 2 | 0 | The paper mentions methylphenobarbital as one of nine drugs studied but provides no specific quantitative pharmacokinetic parameter values (CL, V, etc.) for it in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
