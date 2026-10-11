<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;fusidic acid&quot;}]"></div>

# fusidic acid

- **generic name:** fusidic acid
- **ATC codes:** `D06AX01`, `D09AA02`, `J01XC01`, `S01AA13`
- **DrugBank:** [DB02703](https://go.drugbank.com/drugs/DB02703) · **PubChem:** [CID 3000226](https://pubchem.ncbi.nlm.nih.gov/compound/3000226)
- **molar mass:** 516.7092 g/mol (C31H48O6) — DrugBank
- **groups:** approved, investigational

## About

Fusidic acid is an antibiotic that inhibits bacterial protein synthesis and is used to treat bacterial skin, eye, and other infections. It is an approved medicine, available in topical skin preparations, medicated dressings, eye drops, and systemic formulations, and is used widely in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q259930](https://www.wikidata.org/wiki/Q259930) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fusidic acid (fusidic_acid) | parent | 516.709 | C31H48O6 | DrugBank | [3000226](https://pubchem.ncbi.nlm.nih.gov/compound/3000226) | Bulitta_2013, Munkholm_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 2:53 | 0/0/2 | 2/0/1 | 0/0/0 | 66,840/16,073 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bulitta_2013_reference](drugs/drug_fusidic_acid/FusidicAcid_Bulitta2013_reference.md) | — | 1-compartment (no model) | 2 | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Munkholm_1994_reference](drugs/drug_fusidic_acid/FusidicAcid_Munkholm1994_reference.md) | — | 1-compartment (no model) | 3 | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brosche_2010_protein_biosynthesis_activity](drugs/drug_fusidic_acid/pd_Brosche_2010_protein_biosynthesis_activity.md) | protein biosynthesis activity ← fusidic acid · inhibition effect | — | Brosche S et al., Toxicity of five protein synthesis inhi…, Aquatic toxicology (Amsterd… (2010) | [10.1016/j.aquatox.2010.06.008](https://doi.org/10.1016/j.aquatox.2010.06.008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zwiers_2011_TOF_ratio](drugs/drug_fusidic_acid/pd_Zwiers_2011_TOF_ratio.md) | train-of-four (TOF) ratio ← fusidic acid · inhibition effect | — | Zwiers A et al., Assessment of the potential for displac…, Clinical drug investigation (2011) | [10.2165/11584730-000000000-00000](https://doi.org/10.2165/11584730-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Phee_2019_cfu](drugs/drug_fusidic_acid/pd_Phee_2019_cfu.md) | A. baumannii cfu ← fusidic acid · direct sigmoid Emax (Hill) effect | — | Phee LM et al., Pharmacokinetic-pharmacodynamic modelli…, The Journal of antimicrobia… (2019) | [10.1093/jac/dky524](https://doi.org/10.1093/jac/dky524) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fusidic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2013.pdf` | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) | [23147726](https://pubmed.ncbi.nlm.nih.gov/23147726) | The human population-PK model reports numeric clearance and autoinhibition parameters in the evidence. |
| `Knippenberg_2016.pdf` | Knippenberg B et al., Validation and Application of a Dried B…, Antimicrobial agents and ch… (2016) | popPK | 9 | [10.1128/AAC.00756-16](https://doi.org/10.1128/AAC.00756-16) | [27270283](https://pubmed.ncbi.nlm.nih.gov/27270283) | Population-PK estimates are reported, but their numeric values are not present in the evidence. |
| `Munkholm_1994.pdf` | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | popPK | 9 | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) | [7737235](https://pubmed.ncbi.nlm.nih.gov/7737235) | Human study reports numeric clearance and terminal half-life for fusidic-acid-equivalent activity. |

<sub>queue written 2026-10-07T22:05:38.159503+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brosche_2010 | irrelevant | 0 | 0 | This is an in-vitro bacterial toxicity study and reports no fusidic-acid pharmacokinetic parameters. |
| popPK | Chan_2015 | irrelevant | 1 | 0 | This human case report mentions fusidic acid’s half-life and plasma Cmax but provides no quantitative PK parameters. |
| popPK | Knippenberg_2016 | relevant | 9 | 0 | Population-PK estimates are reported, but their numeric values are not present in the evidence. |
| popPK | Lemaire_2008 | irrelevant | 0 | 0 | Fusidic acid is tested for antibacterial activity in vitro, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Marsot_2017 | irrelevant | 0 | 0 | The study models rifampicin, with fusidic acid only as a coadministration covariate; no fusidic acid PK values are reported. |
| popPK | Marsot_2020 | irrelevant | 0 | 0 | Fusidic acid is only coadministered; the model and PK parameters are for rifampicin. |
| popPK | Phee_2019 | irrelevant | 1 | 0 | This is an in vitro antibacterial PK/PD study, and no quantitative fusidic-acid disposition parameters are reported. |
| popPK | Sherertz_1993 | irrelevant | 0 | 0 | Quantitative half-lives are reported for other coating agents, but not for fusidic acid. |
| popPK | Tsuji_2011 | irrelevant | 1 | 0 | This is a review and provides no numeric fusidic-acid disposition parameters in the evidence. |
| popPK | Zwiers_2011 | irrelevant | 0 | 0 | Fusidic acid is only assessed as a potential sugammadex interaction, with no fusidic-acid disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:05 UTC</sub>
