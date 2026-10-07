<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefamandole&quot;}]"></div>

# cefamandole

- **generic name:** cefamandole
- **ATC codes:** `J01DC03`
- **DrugBank:** [DB01326](https://go.drugbank.com/drugs/DB01326) · **PubChem:** [CID 456255](https://pubchem.ncbi.nlm.nih.gov/compound/456255)
- **molar mass:** 462.503 g/mol (C18H18N6O5S2) — DrugBank
- **groups:** approved, withdrawn

## About

Cefamandole is a second-generation cephalosporin antibiotic that was used to treat bacterial infections such as staphylococcal infections, urinary tract infections, respiratory infections, pneumonia, and bone infections. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2601530](https://www.wikidata.org/wiki/Q2601530) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefamandole | parent | 462.503 | C18H18N6O5S2 | DrugBank | [456255](https://pubchem.ncbi.nlm.nih.gov/compound/456255) | Campillo_1979, Nielsen_1979 |
| cefamandole nafate | metabolite | 490.509 | C19H18N6O6S2 | PubChem | [5284527](https://pubchem.ncbi.nlm.nih.gov/compound/5284527) | Nielsen_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:49 | 2:02 | 0/3/0 | 0/0/0 | 0/0/0 | 99,271/6,105 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Campillo_1979_reference](drugs/drug_cefamandole/Cefamandole_Campillo1979_reference.md) | — | 2-compartment (no model) | 8 | Campillo JA et al., Pharmacokinetics of cefamandole in pati…, International journal of cl… (1979) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1979_disappearance_of_cn](drugs/drug_cefamandole/Cefamandole_Nielsen1979_disappearance_of_cn.md) | — | general linear (no model) | 2 | Nielsen RL et al., Hydrolysis of cefamandole nafate in dia…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1979_rate_constant](drugs/drug_cefamandole/Cefamandole_Nielsen1979_rate_constant.md) | — | general linear (no model) | 2 | Nielsen RL et al., Hydrolysis of cefamandole nafate in dia…, Antimicrobial agents and ch… (1979) | [10.1128/AAC.16.5.683](https://doi.org/10.1128/AAC.16.5.683) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefamandole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Campillo_1979.pdf` | Campillo JA et al., Pharmacokinetics of cefamandole in pati…, International journal of cl… (1979) | popPK | 10 | not captured | [500264](https://pubmed.ncbi.nlm.nih.gov/500264) | The paper provides quantitative two-compartment PK parameters (Vc, Vp, Vdss, rate constants) for cefamandole in human patients. |
| `Klimova_1982.pdf` | Klimova VS et al., [Pharmacokinetics of cefamandole in rab…, Antibiotiki (1982) | popPK | 10 | not captured | [7165292](https://pubmed.ncbi.nlm.nih.gov/7165292) | The paper reports quantitative compartmental pharmacokinetic parameters (volume, clearance constants, half-life) for cefamandole in rabbits. |
| `Wang_2008.pdf` | Wang Y et al., Semiparametric mixed-effects analysis o…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9096-2](https://doi.org/10.1007/s10928-008-9096-2) | [18781382](https://pubmed.ncbi.nlm.nih.gov/18781382) | The paper describes a population PK/PD modeling method applied to cefamandole data, but the specific numeric parameter values are not present in the provided evidence. |
| `Yeh_2001.pdf` | Yeh PH et al., Determination of unbound cefamandole in…, Biomedical chromatography :… (2001) | popPK | 9 | [10.1002/bmc.20](https://doi.org/10.1002/bmc.20) | [11180295](https://pubmed.ncbi.nlm.nih.gov/11180295) | The study reports quantitative PK data for cefamandole in rats, including a specific half-life value and mention of a two-compartmental model fit, but full parameter sets (CL, V) are not explicitly listed in the text provided. |
| `Veng-Pedersen_1988.pdf` | Veng-Pedersen P, Linear and nonlinear system approaches…, Journal of pharmacokinetics… (1988) | popPK | 6 | [10.1007/BF01062384](https://doi.org/10.1007/BF01062384) | [3199318](https://pubmed.ncbi.nlm.nih.gov/3199318) | The study demonstrates PK methods on cefamandole in humans, but the specific numeric parameter values are not included in the provided evidence. |

<sub>queue written 2026-10-07T10:48:21.130882+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mattie_1990 | irrelevant | 2 | 0 | This is a pharmacodynamic study in mice comparing antibacterial effects, and no quantitative pharmacokinetic parameters (e.g., CL, V, t1/2) for cefamandole are provided in the evidence. |
| popPK | Murakawa_1980 | irrelevant | 2 | 0 | Cefamandole is used only as a reference/comparator drug in a study of ceftizoxime, and specific pharmacokinetic parameters for cefamandole are not reported. |
| popPK | Veng-Pedersen_1988 | relevant | 6 | 0 | The study demonstrates PK methods on cefamandole in humans, but the specific numeric parameter values are not included in the provided evidence. |
| popPK | Wang_2008 | relevant | 10 | 0 | The paper describes a population PK/PD modeling method applied to cefamandole data, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:48 UTC</sub>
