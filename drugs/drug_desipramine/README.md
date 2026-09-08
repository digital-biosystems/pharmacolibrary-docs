# desipramine

- **generic name:** desipramine
- **ATC codes:** `N06AA01`
- **DrugBank:** [DB01151](https://go.drugbank.com/drugs/DB01151)
- **groups:** approved

## About

**Description.** Desipramine hydrochloride is a dibenzazepine-derivative tricyclic antidepressant (TCA). TCAs are structurally similar to phenothiazines. They contain a tricyclic ring system with an alkyl amine substituent on the central ring. In non-depressed individuals, desipramine does not affect mood or arousal, but may cause sedation. In depressed individuals, desipramine exerts a positive effect on mood. TCAs are potent inhibitors of serotonin and norepinephrine reuptake. Secondary amine TCAs, such as desipramine and nortriptyline, are more potent inhibitors of norepinephrine reuptake than tertiary amine TCAs, such as amitriptyline and doxepine. TCAs also down-regulate cerebral cortical &beta;-adrenergic receptors and sensitize post-synaptic serotonergic receptors with chronic use. The antidepressant effects of TCAs are thought to be due to an overall increase in serotonergic neurotransmission. TCAs also block histamine-H<sub>1</sub> receptors, &alpha;<sub>1</sub>-adrenergic receptors and muscarinic receptors, which accounts for their sedative, hypotensive and anticholinergic effects (e.g. blurred vision, dry mouth, constipation, urinary retention), respectively. See toxicity section below for a complete listing of side effects. Desipramine exerts less anticholinergic and sedative side effects compared to tertiary amine TCAs, such as amitriptyline and clomipramine. Desipramine may be used to treat depression, neuropathic pain (unlabeled use), agitation and insomnia (unlabeled use) and attention-deficit hyperactivity disorder (unlabeled use).

**Indication.** For relief of symptoms in various depressive syndromes, especially endogenous depression. It has also been used to manage chronic peripheral neuropathic pain, as a second line agent for the management of anxiety disorders (e.g. panic disorder, generalized anxiety disorder), and as a second or third line agent in the ADHD management.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 2/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Asiimwe_2024](drugs/drug_desipramine/Desipramine_Asiimwe2024_reference.md) | Asiimwe IG et al., Machine-Learning Assisted Screening of…, The AAPS journal (2024) | [10.1208/s12248-024-00934-6](https://doi.org/10.1208/s12248-024-00934-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gueorguieva_2010](drugs/drug_desipramine/Desipramine_Gueorguieva2010_reference.md) | Gueorguieva I et al., Desipramine, substrate for CYP2D6 activ…, British journal of clinical… (2010) | [10.1111/j.1365-2125.2010.03731.x](https://doi.org/10.1111/j.1365-2125.2010.03731.x) |

## Coverage

- **PubMed hits:** 76 matched, 20 returned
- **screened:** 2  ·  **relevant:** 6
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tamayo_1992.pdf` | Tamayo M et al., Population pharmacokinetics of imiprami…, European journal of clinica… (1992) | popPK | 9 | [10.1007/BF02280761](https://doi.org/10.1007/BF02280761) | [1505617](https://pubmed.ncbi.nlm.nih.gov/1505617) | The paper explicitly reports quantitative population pharmacokinetic parameters, including elimination constants and half-lives, for desipramine modeled as an active metabolite in children. |
| `Weiner_1981.pdf` | Weiner D et al., Pharmacokinetic linearity of desipramin…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600700929](https://doi.org/10.1002/jps.2600700929) | [6101159](https://pubmed.ncbi.nlm.nih.gov/6101159) | The paper reports quantitative compartmental pharmacokinetic parameters (Ka, Ke, t1/2, F/V) for desipramine in humans following single oral doses. |
| `Sistovaris_1983.pdf` | Sistovaris N et al., Thin-layer chromatographic determinatio…, Journal of chromatography (1983) | popPK | 8 | [10.1016/s0378-4347(00)84844-6](https://doi.org/10.1016/s0378-4347(00)84844-6) | [6643612](https://pubmed.ncbi.nlm.nih.gov/6643612) | The paper reports quantitative compartmental pharmacokinetic parameters (half-lives, AUC, Cmax, and renal clearance) for desipramine in humans. |
| `Yuen_2017.pdf` | Yuen E et al., Prediction of human efficacious antidep…, Pharmacology, biochemistry,… (2017) | popPK | 8 | [10.1016/j.pbb.2017.09.002](https://doi.org/10.1016/j.pbb.2017.09.002) | [28888484](https://pubmed.ncbi.nlm.nih.gov/28888484) | The study develops population PK/PD models for desipramine in mice to quantitatively translate behavioral efficacy data to human doses. |

<sub>queue written 2026-07-18T03:05:52.185918+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Broch_1987 | irrelevant | not captured | not captured | Desipramine is used only as a comparator in a rat brain neurotransmitter metabolism study, with no pharmacokinetic parameters reported. |
| popPK | Mu_2020 | irrelevant | not captured | not captured | Desipramine is used solely as a NET-blocking agent and no pharmacokinetic parameters are reported for it. |
| popPK | Raffel_2013 | irrelevant | not captured | not captured | Desipramine is used solely as a pharmacological NET inhibitor to validate the radiotracer 11C-GMO, with no pharmacokinetic parameters reported for desipramine itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_desipramine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
