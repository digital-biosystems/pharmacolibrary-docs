<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefaclor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefaclor_Jeong2021_estimate&quot;,&quot;label&quot;:&quot;Jeong_2021_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Jeong2021_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefaclor_Jeong2021_estimates&quot;,&quot;label&quot;:&quot;Jeong_2021_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefaclor_Li2009_reference&quot;,&quot;label&quot;:&quot;Li_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefaclor/Cefaclor_Li2009_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cefaclor

- **generic name:** cefaclor
- **ATC codes:** `J01DC04`
- **DrugBank:** [DB00833](https://go.drugbank.com/drugs/DB00833) · **PubChem:** [CID 51039](https://pubchem.ncbi.nlm.nih.gov/compound/51039)
- **molar mass:** 367.807 g/mol (C15H14ClN3O4S) — DrugBank
- **groups:** approved, investigational

## About

Cefaclor is a second-generation cephalosporin antibiotic used to treat bacterial infections such as tonsillitis, otitis media, urinary tract infections, bronchitis, and pneumonia. It is an approved antibiotic that remains in general clinical use for these common infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415167](https://www.wikidata.org/wiki/Q415167) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefaclor | parent | 367.807 | C15H14ClN3O4S | DrugBank | [51039](https://pubchem.ncbi.nlm.nih.gov/compound/51039) | Jeong_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:43 | 11:22 | 3/1/0 | 0/0/0 | 0/0/0 | 369,093/28,514 | einfracz / qwen3.8-27b | 10 | 4/6 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jeong_2021_estimate](drugs/drug_cefaclor/Cefaclor_Jeong2021_estimate.md) | ▶ model + simulator | 1-compartment, oral | 4 | Jeong SH et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050754](https://doi.org/10.3390/pharmaceutics13050754) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Jeong_2021_estimates](drugs/drug_cefaclor/Cefaclor_Jeong2021_estimates.md) | ▶ model + simulator | 1-compartment, oral | 7 | Jeong SH et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2021) | [10.3390/pharmaceutics13050754](https://doi.org/10.3390/pharmaceutics13050754) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2009_reference](drugs/drug_cefaclor/Cefaclor_Li2009_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li M et al., Effects of cranberry juice on pharmacok…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.00774-08](https://doi.org/10.1128/AAC.00774-08) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jang_2024_reference](drugs/drug_cefaclor/Cefaclor_Jang2024_reference.md) | — | 1-compartment (no model) | 0 | Jang JH et al., Structure-Based Analysis of Cefaclor Ph…, International journal of mo… (2024) | [10.3390/ijms25136880](https://doi.org/10.3390/ijms25136880) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefaclor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 68 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oguma_1991.pdf` | Oguma T et al., Pharmacokinetic analysis of the effects…, Antimicrobial agents and ch… (1991) | popPK | 8 | [10.1128/AAC.35.9.1729](https://doi.org/10.1128/AAC.35.9.1729) | [1952839](https://pubmed.ncbi.nlm.nih.gov/1952839) | The study is a relevant human PK investigation of cefaclor, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text, only qualitative descriptions of the effects. |

<sub>queue written 2026-10-07T10:34:23.895833+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Garrido-Mesa_2022 | irrelevant | 0 | 0 | The study investigates the immunopharmacological effects of the melanocortin agonist PL8177 in a mouse model of arthritis and does not involve cefaclor. |
| popPK | Hanko_2019 | irrelevant | 0 | 0 | The paper describes synthetic biology systems for gene expression regulation and does not involve the drug cefaclor or any pharmacokinetic studies. |
| popPK | Kitaura_1988 | irrelevant | 0 | 0 | The provided evidence contains only software metadata (GROBID extraction log) and no scientific content regarding cefaclor pharmacokinetics. |
| popPK | Kitaura_1989 | irrelevant | 0 | 0 | The provided evidence consists solely of software metadata (GROBID) and contains no scientific text, data, or reference to the drug cefaclor. |
| popPK | Li_2009 | relevant | 7 | 4 | The paper reports population PK parameters (CL/F, V/F) for cefaclor in humans, but the specific numeric values in the provided evidence are fragmented and mixed with amoxicillin data, making them difficult to extract with high confidence. |
| popPK | Oguma_1991 | relevant | 8 | 2 | The study is a relevant human PK investigation of cefaclor, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text, only qualitative descriptions of the effects. |
| popPK | Struyfs_2025 | irrelevant | 0 | 0 | The paper is a proteomic study of dengue virus infection and does not involve cefaclor or report any pharmacokinetic parameters. |
| popPK | Szefler_2024 | irrelevant | 0 | 0 | The paper studies lebrikizumab and asthma biomarkers, containing no data on cefaclor pharmacokinetics. |
| popPK | Thomas_2022 | irrelevant | 0 | 0 | The paper describes molecular pumps and rotaxanes, with no mention of cefaclor or pharmacokinetics. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The study is a surveillance of antibiotic resistance (MICs and susceptibility rates) in bacteria, not a pharmacokinetic study of cefaclor. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | The study reports antibiotic susceptibility (MIC) data, not pharmacokinetic parameters for cefaclor. |
| popPK | Torumkuney_2020_3 | irrelevant | 0 | 0 | The study is an antibiotic resistance survey reporting MICs and susceptibility rates, not a pharmacokinetic parameter study for cefaclor. |
| popPK | Torumkuney_2020_4 | irrelevant | 0 | 0 | The paper reports antibiotic susceptibility (MICs) of bacteria to cefaclor, not the pharmacokinetic parameters of the drug itself. |
| popPK | Torumkuney_2020_5 | irrelevant | 0 | 0 | This is an antibiotic susceptibility survey measuring MICs and reporting percentage susceptibility, not a pharmacokinetic study with disposition parameters. |
| popPK | Torumkuney_2020_6 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility survey reporting MICs and breakpoint classification, not a pharmacokinetic study with disposition parameters. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | The paper is an antimicrobial susceptibility surveillance study (MICs) of bacteria, not a pharmacokinetic study reporting disposition parameters for cefaclor. |
| popPK | Yamada_2022 | irrelevant | 3 | 0 | The study performs Monte Carlo simulations for PK/PD target attainment using existing models rather than reporting new quantitative PK parameter estimates (CL, V, etc.) for cefaclor in the text. |
| popPK | de_2004 | relevant | 4 | 0 | The study utilizes in vivo PK data for cefaclor in humans (referenced as "obtained in vivo in the interstitial space fluid of human tissue") to drive in vitro PD models, but the specific quantitative PK parameter values (CL, V, ka) are not provided in the evidence, being assumed or cited from standard human PK data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:34 UTC</sub>
