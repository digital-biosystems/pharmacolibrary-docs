<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;irsogladine&quot;}]"></div>

# irsogladine

- **generic name:** irsogladine
- **ATC codes:** `A02BX16`
- **DrugBank:** [DB13056](https://go.drugbank.com/drugs/DB13056) · **PubChem:** [CID 3752](https://pubchem.ncbi.nlm.nih.gov/compound/3752)
- **molar mass:** 256.09 g/mol (C9H7Cl2N5) — DrugBank
- **groups:** investigational

## About

Irsogladine is an anti-ulcer drug intended for peptic ulcer and other acid-related stomach disorders, and has also been described as an anticarcinogenic and radiation-protective agent. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15634081](https://www.wikidata.org/wiki/Q15634081) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 09:37 | 3:18 | 0/0/0 | 0/0/0 | 0/0/0 | 139,740/2,186 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 3/13 | 15/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nakamura_2006.pdf` | Nakamura A et al., Effects of irsogladine on P450-isoform…, Arzneimittel-Forschung (2006) | pgx | 7 | [10.1055/s-0031-1296750](https://doi.org/10.1055/s-0031-1296750) | [16927538](https://www.ncbi.nlm.nih.gov/pubmed/16927538) | metadata signals extractable PGX data (CYP2A6, PK/PD-context) |

<sub>queue written 2026-10-04T09:36:52.059362+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | BAUM_1963 | irrelevant | 0 | 0 | no_text gate: only 15 chars of text extracted (&lt; 400) |
| popPK | Barciszewska_1986 | irrelevant | 0 | 0 | The paper describes the primary structure of wheat germ tRNA and is unrelated to irsogladine pharmacokinetics. |
| popPK | Benedetti_2024 | irrelevant | 0 | 0 | The paper is a theoretical physics study on the zero-dimensional O(N) model and transseries expansions, containing no pharmacokinetic data for irsogladine. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes an in silico/in vitro method for identifying drug combinations and does not report pharmacokinetic parameters for irsogladine. |
| PD | Bertin_2023 | not_relevant | 0 | 0 | The paper focuses on machine learning for drug combination synergy prediction and does not report pharmacodynamic parameters or exposure-response relationships for irsogladine. |
| popPK | Blanz_1983 | irrelevant | 0 | 0 | The paper is a taxonomic study of fungal DNA G+C content and contains no pharmacokinetic data for irsogladine. |
| popPK | CHEW_1964 | irrelevant | 0 | 0 | no_text gate: only 30 chars of text extracted (&lt; 400) |
| popPK | Chan_1982 | irrelevant | 0 | 0 | The paper describes the nucleotide sequence of a tRNA molecule and contains no pharmacokinetic data for irsogladine. |
| popPK | Deng_2022 | irrelevant | 0 | 0 | The paper describes GPR15 receptor signaling in cell lines and does not involve the drug irsogladine or any pharmacokinetic parameters. |
| popPK | Drinnan_1991 | irrelevant | 0 | 0 | The paper describes G-protein expression in rat basal ganglia and contains no pharmacokinetic data for irsogladine. |
| popPK | Effiong_2023 | irrelevant | 0 | 0 | The paper is a nutritional analysis of oyster mushrooms and contains no data regarding the drug irsogladine or its pharmacokinetics. |
| popPK | Gillingham_1988 | irrelevant | 0 | 0 | The paper describes high-G training for fighter aircrew and contains no pharmacokinetic data for irsogladine. |
| popPK | Gong_2019 | irrelevant | 0 | 0 | The paper is a review of chemical components in Ganoderma fungi and does not mention irsogladine or any pharmacokinetic parameters. |
| popPK | Hasegawa_1978 | irrelevant | 0 | 0 | The paper describes the purification and nucleotide sequencing of threonine tRNA from Bacillus subtilis and contains no pharmacokinetic data for irsogladine. |
| popPK | Hosokawa_1994 | irrelevant | 0 | 0 | The paper is a clinical case report on tumor reduction and does not report any pharmacokinetic parameters for irsogladine. |
| PD | Hosokawa_1994 | not_relevant | 1 | 0 | The paper is a case report of two patients describing qualitative tumor reduction with a fixed dose, but it provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper is a genetic study on NOBOX polymorphisms in pigs and contains no pharmacokinetic data for irsogladine. |
| popPK | Ikeda_2022 | irrelevant | 0 | 0 | The paper describes the mechanism of glycogen debranching enzyme and does not involve irsogladine or any pharmacokinetic parameters. |
| popPK | Iwata_1998 | irrelevant | 0 | 0 | The study investigates the mechanism of irsogladine on gap junctions and mucosal barrier function in rats, not its pharmacokinetic disposition parameters. |
| popPK | Lee_2020 | irrelevant | 0 | 0 | The paper is a hemodynamic study of venous and arterial responses to partial gravity in humans and does not involve the drug irsogladine or any pharmacokinetic parameters. |
| popPK | Loyd_2018 | irrelevant | 0 | 0 | The paper is a taxonomic and phylogenetic study of Ganoderma fungi and contains no pharmacokinetic data for irsogladine. |
| popPK | Luangharn_2021 | irrelevant | 0 | 0 | The paper is a taxonomic and phylogenetic study of Ganoderma fungi and contains no pharmacokinetic data for irsogladine. |
| PGx | Nakamura_1997 | not_relevant | 0 | 0 | The paper describes species differences in CYP2C-mediated metabolism of irsogladine but does not report any human genetic variants or genotypes affecting PK/PD parameters. |
| PGx | Nakamura_2006 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory potential of irsogladine on CYP450 enzymes, not the effect of genetic variants on irsogladine's pharmacokinetics or pharmacodynamics. |
| popPK | Oliveira_2023 | irrelevant | 0 | 0 | The paper analyzes metal impurities in eye drops and does not involve the drug irsogladine or any pharmacokinetic parameters. |
| popPK | REES_1963 | irrelevant | 0 | 0 | no_text gate: only 23 chars of text extracted (&lt; 400) |
| popPK | Ran_2024 | irrelevant | 0 | 0 | The paper analyzes fatty acid composition in dairy products and does not involve irsogladine or pharmacokinetics. |
| popPK | Susilowati_2020 | irrelevant | 0 | 0 | The paper is a mathematics study on graph theory (dominant metric dimension) and contains no pharmacokinetic data for irsogladine. |
| popPK | Takahashi_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gastric mucosal restitution in rats using irsogladine as a pharmacological agent, and it does not report any pharmacokinetic parameters (CL, V, ka, etc.) for irsogladine. |
| popPK | Uno_2024 | irrelevant | 0 | 0 | The paper is a biochemical study on glycogen debranching enzyme and dextrin substrates, unrelated to irsogladine pharmacokinetics. |
| popPK | Urase_1993 | irrelevant | 0 | 0 | The paper discusses G-CSF receptor fragments and granulopoiesis, containing no pharmacokinetic data for irsogladine. |
| popPK | Weissman_2019 | irrelevant | 0 | 0 | The paper is a taxonomic review of cricket species and contains no pharmacokinetic data for irsogladine. |
| popPK | Wong_1979 | irrelevant | 0 | 0 | The paper describes the nucleotide sequence of glutamate tRNA from yeast and is unrelated to the pharmacokinetics of irsogladine. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper investigates TRPV4-mediated mitophagy in acute lung injury and does not involve the drug irsogladine or report any pharmacokinetic parameters. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a genetic association study on pig growth traits and does not involve irsogladine or pharmacokinetics. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is a botanical study on the seed development of the plant Gastrodia elata and contains no pharmacokinetic data for irsogladine. |
| popPK | Zhao_2020 | irrelevant | 0 | 0 | The paper characterizes the chemical composition of highland barley bran oil and does not involve the drug irsogladine or any pharmacokinetic parameters. |
| popPK | Zhao_2023 | irrelevant | 0 | 0 | The paper is a genetic study on CD36 polymorphisms in chickens and contains no pharmacokinetic data for irsogladine. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | The paper is a study on fish vaccine immunology and contains no pharmacokinetic data for irsogladine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
