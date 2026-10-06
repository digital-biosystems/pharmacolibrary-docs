<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;quazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quazepam_Cha2024_reference&quot;,&quot;label&quot;:&quot;Cha_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quazepam/Quazepam_Cha2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# quazepam

- **generic name:** quazepam
- **ATC codes:** `N05CD10`
- **DrugBank:** [DB01589](https://go.drugbank.com/drugs/DB01589) · **PubChem:** [CID 4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999)
- **molar mass:** 386.794 g/mol (C17H11ClF4N2S) — DrugBank
- **groups:** approved, illicit

## About

Quazepam is a benzodiazepine hypnotic used to treat insomnia and other sleep disorders. It is an approved medicine, though not authorised in the European Union, and carries a boxed warning; it is also listed as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3927403](https://www.wikidata.org/wiki/Q3927403) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| quazepam | parent | 386.794 | C17H11ClF4N2S | DrugBank | [4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999) | Hilbert_1984, Hilbert_1984_2 |
| 2-oxoquazepam | metabolite | 370.73 | C17H11ClF4N2O | PubChem | [93250](https://pubchem.ncbi.nlm.nih.gov/compound/93250) | Hilbert_1984 |
| N-desalkyl-2-oxoquazepam | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:53 | 4:27 | 1/3/0 | 0/0/0 | 0/0/0 | 114,254/7,633 | ollama / glm-5.3-flash | 3 | 1/1 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cha_2024_reference](drugs/drug_quazepam/Quazepam_Cha2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Cha HJ et al., Development of a Web Application for Si…, Pharmaceutics (2024) | [10.3390/pharmaceutics16050689](https://doi.org/10.3390/pharmaceutics16050689) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1984_reference](drugs/drug_quazepam/Quazepam_Chung1984_reference.md) | — | general linear (no model) | 0 | Chung M et al., Multiple-dose quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.70](https://doi.org/10.1038/clpt.1984.70) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hilbert_1984_reference](drugs/drug_quazepam/Quazepam_Hilbert1984_reference.md) | — | general linear (no model) | 6 | Hilbert JM et al., Quazepam kinetics in the elderly, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.220](https://doi.org/10.1038/clpt.1984.220) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hilbert_1984_2_reference](drugs/drug_quazepam/Quazepam_Hilbert1984v2_reference.md) | — | general linear (no model) | 4 | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=quazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 50 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_1984.pdf` | Chung M et al., Multiple-dose quazepam kinetics, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.70](https://doi.org/10.1038/clpt.1984.70) | [6705450](https://pubmed.ncbi.nlm.nih.gov/6705450) | Human multiple-dose quazepam PK with two-compartment model and half-lives reported in abstract, but CL/V values not shown here. |
| `Hilbert_1984.pdf` | Hilbert JM et al., Quazepam kinetics in the elderly, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.220](https://doi.org/10.1038/clpt.1984.220) | [6478742](https://pubmed.ncbi.nlm.nih.gov/6478742) | Human geriatric quazepam PK with two-compartment model and numeric half-lives and Cmax reported directly in the abstract, though CL/V values are not given. |
| `Hilbert_1984_2.pdf` | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | popPK | 8 | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) | [6734056](https://pubmed.ncbi.nlm.nih.gov/6734056) | Human study with two-compartment model reporting numeric Vc, absorption t1/2, lag time, and elimination half-lives for quazepam and its metabolites directly in the abstract. |

<sub>queue written 2026-10-06T20:52:12.594901+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cha_2024 | irrelevant | 0 | 0 | This is a population PK study of zolpidem; quazepam is only mentioned as a comparator benzodiazepine with no quazepam parameters. |
| popPK | Fujimiya_1995 | irrelevant | 0 | 0 | The study concerns ethanol pharmacokinetics in rabbits, not quazepam; no quazepam parameters appear. |
| PGx | Hara_2005 | not_relevant | 0 | 0 | Quazepam is only an inhibitor tested in vitro; no gene variant/genotype effect on quazepam PK/PD is reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper covers herbal-drug interactions (e.g. St John's wort, ginkgo) with no gene variant/genotype/phenotype effects on quazepam PK/PD. |
| PGx | Kawaguchi_2004 | not_relevant | 0 | 0 | This is a drug–drug interaction (St John's Wort) study, not a gene variant/genotype/phenotype effect on quazepam PK/PD. |
| popPK | Liu_2025 | irrelevant | 3 | 2 | This is an absorption/biopharmaceutics modeling study of food effect on quazepam; no disposition PK parameters (CL, V, half-life) are reported in the evidence, and any values likely reside in figures/supplementary material not provided. |
| PGx | Miura_2004 | not_relevant | 3 | 5 | In vitro enzyme phenotyping and inhibitor Ki values, not a gene variant/genotype effect on quazepam PK/PD in vivo. |
| PGx | Otani_2003 | not_relevant | 2 | 2 | Only states quazepam is partly metabolized by CYP3A4; no genotype/phenotype effect on any PK/PD parameter is reported. |
| popPK | Pillai_2004 | irrelevant | 0 | 0 | The paper models ibandronate, not quazepam; no quazepam parameters appear. |
| popPK | Scharf_1993 | irrelevant | 1 | 0 | Clinical sleep-efficacy study with no PK parameters reported; "three-compartment" refers to study design, not a PK model. |
| PGx | Sugimoto_2006 | not_relevant | 2 | 5 | GFJ (food-drug CYP3A4 inhibition) effect on quazepam PK/PD, not a gene variant/genotype/phenotype effect. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:52 UTC</sub>
